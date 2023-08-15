import { Prop, Schema } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema({ versionKey: false })
export class Cowroom {
@Prop({
    type: String,
    required: true
})
name: string;

@Prop({
    type: Number,
    required: true
})
width: number;

@Prop({
    type: Number,
    required: true
})
length: number;

@Prop({
    type: Number,
    required: true
})
height: number;

@Prop({
    type: Types.ObjectId,
    ref: "CowroomType"
})
type_id: Types.ObjectId;
}