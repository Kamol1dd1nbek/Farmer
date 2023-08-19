import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types, HydratedDocument } from 'mongoose';

export type MilkDocument = HydratedDocument<Milk>;

@Schema({ versionKey: false })
export class Milk {
  @Prop({
    type: String,
    required: true,
  })
  cattle_id: Types.ObjectId;

  @Prop({
    type: Date,
    required: true,
  })
  date: string;

  @Prop({
    type: Number,
    required: true,
  })
  litr: number;

  @Prop({
    type: String,
    default: '',
  })
  description: string;

  @Prop({
    type: Types.ObjectId,
    required: true,
  })
  tech_worker_id: Types.ObjectId;
}

export const MilksSchema = SchemaFactory.createForClass(Milk);
