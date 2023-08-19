import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

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
    ref: "Worker"
  })
  supervisor_id: Types.ObjectId;
}

export const HerdSchema = SchemaFactory.createForClass(Herd);
