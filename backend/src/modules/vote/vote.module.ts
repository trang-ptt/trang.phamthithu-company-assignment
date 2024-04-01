import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Joke, JokeSchema } from '../joke/entities';
import { Vote, VoteSchema } from './entities';
import { VoteController } from './vote.controller';
import { VoteService } from './vote.service';
import { JokeRepository, VoteRepository } from 'src/repositories';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Vote.name, schema: VoteSchema },
      { name: Joke.name, schema: JokeSchema },
    ]),
  ],
  controllers: [VoteController],
  providers: [
    VoteService,
    { provide: 'VoteRepositoryInterface', useClass: VoteRepository },
    { provide: 'JokeRepositoryInterface', useClass: JokeRepository },
  ],
})
export class VoteModule {}
