import { Injectable } from '@nestjs/common';
import { BaseRepositoryAbstract } from './base';
import { Joke } from 'src/modules/joke/entities';
import { JokeRepositoryInterface } from 'src/modules/joke/interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class JokeRepository
  extends BaseRepositoryAbstract<Joke>
  implements JokeRepositoryInterface
{
  constructor(
    @InjectModel(Joke.name)
    private readonly jokes_repository: Model<Joke>,
  ) {
    super(jokes_repository);
  }

  async count(): Promise<number> {
    const count: number = await this.jokes_repository.countDocuments()
    return count
  }
}