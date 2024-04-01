import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateVoteRequestDTO {
  @ApiProperty()
  @IsNotEmpty()
  jokeId: string;

  @ApiProperty()
  @IsNotEmpty()
  isFunny: boolean;
}

export class CreateVoteResponseDTO {
    @ApiProperty({
        type: 'string',
        default: 'SUCCESS'
    })
    message: string

    constructor() {
        this.message = 'SUCCESS'
    }
}