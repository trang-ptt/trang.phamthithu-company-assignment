import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { VOTED_JOKES } from 'src/app.constants';
import { JokeRepository, VoteRepository } from 'src/repositories';
import { BaseServiceAbstract } from 'src/repositories/base';
import { CreateVoteRequestDTO, CreateVoteResponseDTO } from './dtos/create-vote.dto';
import { Vote } from './entities';

@Injectable()
export class VoteService extends BaseServiceAbstract<Vote> {
  constructor(
    @Inject('VoteRepositoryInterface')
    private readonly votes_repository: VoteRepository,
    @Inject('JokeRepositoryInterface')
    private readonly joke_repository: JokeRepository,
  ) {
    super(votes_repository);
  }

  async vote(req: Request, res: Response, dto: CreateVoteRequestDTO) {
    const { jokeId, isFunny } = dto;
    const votedJokes: string[] = this.getVotedJokes(req);
    if (votedJokes.includes(jokeId))
      throw new BadRequestException('Joke is voted');
    const joke = await this.joke_repository.findOneById(jokeId);
    const newVote = await this.votes_repository.create({
      joke,
      is_funny: isFunny,
    });

    votedJokes.push(newVote.joke._id);
    this.setVotedJokes(res, votedJokes);
    return new CreateVoteResponseDTO();
  }

  private getVotedJokes(req: Request): string[] {
    try {
      const cookie = req.cookies[VOTED_JOKES];
      return cookie ? JSON.parse(cookie) : [];
    } catch (error) {
      return [];
    }
  }

  private setVotedJokes(res: Response, votedJokes: string[]): void {
    res.cookie(VOTED_JOKES, JSON.stringify(votedJokes), {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
    });
  }
}
