import { Types } from "mongoose";

export class CreateMilkDto {
    cattle_id: Types.ObjectId;
    date: string;
    litr: number;
    description: string;
    tech_worker_id: Types.ObjectId;
}