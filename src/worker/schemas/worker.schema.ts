import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type WorkerDocument = HydratedDocument<Worker>;
 
@Schema({ versionKey: false })
export class Worker {
    @Prop({
        type: String,
        required: true
    })
    full_name: string;

    @Prop({
        type: String,
        required: true,
        // unique: true
    })
    email: string;

    @Prop({
        type: String,
        required: true,
        // unique: true
    })
    phone: string;

    @Prop({
        type: String,
        required: true
    })
    hashed_password: string;

    @Prop({
        type: String
    })
    hashed_refresh_token: string;

    @Prop({
        type: Types.ObjectId,
        ref: "Role"
    })
    role_id: string;

    @Prop({
        type: Number,
        required: true
    })
    salary: number;
}

export const WorkerSchema = SchemaFactory.createForClass(Worker);