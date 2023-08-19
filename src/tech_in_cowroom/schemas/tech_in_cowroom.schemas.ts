import { Prop, Schema } from "@nestjs/mongoose";
import { Types } from "mongoose";

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
