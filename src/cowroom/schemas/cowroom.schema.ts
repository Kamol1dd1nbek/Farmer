import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CowroomDocument = HydratedDocument<Cowroom>;

@Schema({ versionKey: false })
export class Cowroom {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: Number,
    required: true,
  })
  width: number;

  @Prop({
    type: Number,
    required: true,
  })
  length: number;

  @Prop({
    type: Number,
    required: true,
  })
  height: number;

  @Prop({
    type: Types.ObjectId,
    ref: 'CowroomType',
  })
  type_id: Types.ObjectId;
}

export const CowroomSchema = SchemaFactory.createForClass(Cowroom);
