import { Injectable } from '@nestjs/common';
import { BaseRepositoryAbstract } from './base';
import { Vote } from 'src/modules/vote/entities';
import { VoteRepositoryInterface } from 'src/modules/vote/interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class VoteRepository
  extends BaseRepositoryAbstract<Vote>
  implements VoteRepositoryInterface
{
  constructor(
    @InjectModel(Vote.name)
    private readonly votes_repository: Model<Vote>,
  ) {
    super(votes_repository);
  }
}
