import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types, HydratedDocument } from 'mongoose';

export type MilkDocument = HydratedDocument<Milk>;

@Schema({ versionKey: false })
export class Milk {
  @Prop({
    type: Types.ObjectId,
    ref: "Cattle"
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
    ref: "TechWorker"
  })
  tech_worker_id: Types.ObjectId;
}

export const MilksSchema = SchemaFactory.createForClass(Milk);
