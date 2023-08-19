import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
import { Types } from "mongoose";

export class CreateMilkDto {
    @ApiProperty({ example: "64ddf29369608e5e645ba5aa", description: "| Milk: cattle id" })
    @IsNotEmpty()
    @IsString()
    @MinLength(20)
    cattle_id: Types.ObjectId;

    @ApiProperty({ example: "2023-01-16", description: "| Milk: date" })
    @IsDateString()
    @IsNotEmpty()
    date: string;

    @ApiProperty({ example: "64ddf29369608e5e645ba5aa", description: "| Milk: litr" })
    @IsNotEmpty()
    @IsNumber()
    litr: number;

    @ApiProperty({ example: "Good", description: "| Milk: description" })
    @IsString()
    @IsOptional()
    description: string;

    @ApiProperty({ example: "64ddf29369608e5e645ba5aa", description: "| Milk: technique and worker id" })
    @IsNotEmpty()
    @IsString()
    tech_worker_id: Types.ObjectId;
}