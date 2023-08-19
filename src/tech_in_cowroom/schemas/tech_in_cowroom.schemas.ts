import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type TechInCowroomDocument = HydratedDocument<TechInCowroom>;
@Schema({ versionKey: false })
export class TechInCowroom {
    @Prop({
        type: Types.ObjectId,
        ref: "Technique"
    })
    technique_id: Types.ObjectId;

    @Prop({
        type: Types.ObjectId,
        ref: "Cowroom"
    })
    cowroom_id: Types.ObjectId;

    @Prop({
        type: Types.ObjectId,
        ref: "Worker"
    })
    incharge_id: Types.ObjectId;
}

export const TechInCowroomSchema = SchemaFactory.createForClass(TechInCowroom);