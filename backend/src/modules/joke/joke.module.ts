import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JokeRepository } from 'src/repositories/joke.repository';
import { JokeController, JokeService } from '.';
import { Joke, JokeSchema } from './entities';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Joke.name, schema: JokeSchema }]),
  ],
  controllers: [JokeController],
  providers: [
    JokeService,
    { provide: 'JokeRepositoryInterface', useClass: JokeRepository },
  ],
})
export class JokeModule {}
