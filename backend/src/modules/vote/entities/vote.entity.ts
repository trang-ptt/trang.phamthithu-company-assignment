import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Joke } from 'src/modules/joke/entities';
import { BaseEntity } from 'src/modules/shared';

export type VoteDocument = HydratedDocument<Vote>;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Vote extends BaseEntity {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Joke', required: true })
  joke: Joke;

  @Prop({ required: true })
  is_funny: boolean;
}

export const VoteSchema = SchemaFactory.createForClass(Vote);
