import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CowroomTypeDocument = HydratedDocument<CowroomType>;
@Schema({ versionKey: false })
export class CowroomType {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    default: '',
  })
  description: string;
}

export const CowroomTypeSchema = SchemaFactory.createForClass(CowroomType);