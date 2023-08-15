import { ApiProperty } from '@nestjs/swagger';
import { Types } from "mongoose";

export class CreateCowroomDto {
    @ApiProperty({ example: "B1", description: "Cowroom name" })
    name: string;

    @ApiProperty({ example: "25", description: "Cowroom width" })
    width: number;

    @ApiProperty({ example: "40", description: "Cowroom length" })
    length: number;

    @ApiProperty({ example: "4", description: "Cowroom height" })
    height: number;

    @ApiProperty({ example: "64db51e2636c905ee05cbe42", description: "Cowroom type id" })
    type_id: Types.ObjectId;
}