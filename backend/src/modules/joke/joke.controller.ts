import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { JokeService } from './joke.service';

@Controller('joke')
export class JokeController {
  constructor(private jokeService: JokeService) {}

  @Get()
  async getJoke(@Req() req: Request, @Res() res: Response) {
    const joke = await this.jokeService.get(req);
    res.json(joke);
  }
}
