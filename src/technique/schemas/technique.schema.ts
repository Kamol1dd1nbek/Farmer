import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TechniqueDocument = HydratedDocument<Technique>;

@Schema({ versionKey: false })
export class Technique {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    required: true,
  })
  description: string;
}

export const TechniqueSchema = SchemaFactory.createForClass(Technique);
