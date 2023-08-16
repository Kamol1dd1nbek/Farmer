import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type HerdDocument = HydratedDocument<Herd>;

@Schema({ versionKey: false })
export class Herd {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    required: true
  })
  supervisor_id: string;
}

export const HerdSchema = SchemaFactory.createForClass(Herd);