import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  getWebpage(res: Response) {
    let indexHTML = readFileSync(
      join(__dirname, '../../', 'frontend', 'index.html'),
      'utf-8',
    );

    indexHTML = indexHTML.replace(
      /{{API_URL}}/g,
      process.env.API_URL || 'http://localhost:3000',
    );

    res.send(indexHTML);
  }
}
