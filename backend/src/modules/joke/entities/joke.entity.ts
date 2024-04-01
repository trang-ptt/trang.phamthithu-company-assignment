import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseEntity } from 'src/modules/shared';

export type JokeDocument = HydratedDocument<Joke>;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Joke extends BaseEntity {
  @Prop({ required: true })
  content: string;
}

export const JokeSchema = SchemaFactory.createForClass(Joke);
