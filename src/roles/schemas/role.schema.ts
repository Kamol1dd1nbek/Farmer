import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RoleDocument = HydratedDocument<Role>;

@Schema({ versionKey: false })
export class Role {
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

export const RoleSchema = SchemaFactory.createForClass(Role);
