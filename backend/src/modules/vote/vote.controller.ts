import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateVoteRequestDTO } from './dtos/create-vote.dto';
import { VoteService } from './vote.service';

@Controller('vote')
export class VoteController {
  constructor(private voteService: VoteService) {}

  @Post()
  async voteJoke(
    @Req() req: Request,
    @Res() res: Response,
    @Body() dto: CreateVoteRequestDTO,
  ) {
    const vote = await this.voteService.vote(req, res, dto);
    res.json(vote);
  }
}
