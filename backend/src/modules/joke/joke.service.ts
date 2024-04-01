import { Inject, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { NO_JOKE_MESSAGE, VOTED_JOKES } from 'src/app.constants';
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

  async get(req: Request): Promise<FindAllResponse<Joke> | string> {
    const count = await this.joke_repository.count();
    const votedJokes: string[] = this.getVotedJokes(req);

    if (votedJokes.length >= count) {
      return NO_JOKE_MESSAGE;
    }

    let joke;
    do {
      const choseJokeIndex = Math.floor(Math.random() * count);
      joke = await this.joke_repository.findAll(
        {},
        { skip: choseJokeIndex, limit: 1 },
      );
    } while (votedJokes.includes(joke.items[0].id) && joke);

    return joke;
  }

  private getVotedJokes(req: Request): string[] {
    try {
      const cookie = req.cookies[VOTED_JOKES];
      return cookie ? JSON.parse(cookie) : [];
    } catch (error) {
      return [];
    }
  }
}
