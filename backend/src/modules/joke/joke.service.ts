import { Inject, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { BaseServiceAbstract } from 'src/repositories/base';
import { JokeRepository } from 'src/repositories/joke.repository';
import { FindAllResponse } from 'src/types/common.type';
import { Joke } from './entities';

@Injectable()
export class JokeService extends BaseServiceAbstract<Joke> {
  constructor(
    @Inject('JokeRepositoryInterface')
    private readonly joke_repository: JokeRepository,
  ) {
    super(joke_repository);
  }

  async get(
    req: Request,
    res: Response,
  ): Promise<FindAllResponse<Joke> | string> {
    const count = await this.joke_repository.count();
    const seenJokes: number[] = this.getSeenJokes(req);
    console.log(seenJokes)

    // Ensure we don't enter an infinite loop if all jokes have been seen
    if (seenJokes.length >= count) {
      return `That's all the jokes for today! Come back another day!`;
    }

    let choseJokeIndex;
    let joke;
    do {
      choseJokeIndex = Math.floor(Math.random() * count);
      joke = await this.joke_repository.findAll(
        {},
        { skip: choseJokeIndex, limit: 1 },
      );
    } while (seenJokes.includes(choseJokeIndex) && joke);

    // Update seen jokes
    seenJokes.push(choseJokeIndex);
    this.setSeenJokes(res, seenJokes);

    return joke;
  }

  private getSeenJokes(req: Request): number[] {
    try {
      const cookie = req.cookies['seenJokes'];
      return cookie ? JSON.parse(cookie) : [];
    } catch (error) {
      return [];
    }
  }

  private setSeenJokes(res: Response, seenJokes: number[]): void {
    res.cookie('seenJokes', JSON.stringify(seenJokes), {
      maxAge: 60 * 1000,
      httpOnly: true,
    });
  }
}
