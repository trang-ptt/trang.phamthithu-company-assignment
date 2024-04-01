import { Module } from '@nestjs/common';
import { JokeController, JokeService } from '.';
import { Joke, JokeSchema } from './entities';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Joke.name, schema: JokeSchema }]),
  ],
  controllers: [JokeController],
  providers: [JokeService],
})
export class JokeModule {}
