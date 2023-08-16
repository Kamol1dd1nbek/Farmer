import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type CattleDocument = HydratedDocument<Cattle>;

@Schema({ versionKey: false })
export class Cattle {
    @Prop({
        type: String,
        minlength: 3,
        required: true
    })
    breed: string;

    @Prop({
        type: Number,
        required: true,
        min: 0,
        max: 30
    })
    age: number;

    @Prop({
        type: String,
        required: true,
    })
    herd_id: string;

    @Prop({
        type: Boolean,
        required: true
    })
    is_bull: boolean;

    @Prop({
        type: Types.ObjectId,
        ref: "Cattle"
    })
    mother_id: string;
}

export const CattleSchema = SchemaFactory.createForClass(Cattle);