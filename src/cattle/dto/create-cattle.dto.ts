import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, Min, Max,MinLength, IsBoolean } from "class-validator";

export class CreateCattleDto {
    @ApiProperty({ example: "Jersey", description: "| Cattle: breed" })
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    breed: string;

    @ApiProperty({ example: "3", description: "| Cattle: age" })
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(30)
    age: number;

    @ApiProperty({ example: "64dc9022c2edf5c6c8b9fbfb", description: "| Cattle: herd" })
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    herd_id: string;

    @ApiProperty({ example: false, description: "| Cattle: is_bull" })
    @IsNotEmpty()
    @IsBoolean()
    is_bull: boolean;

    @ApiProperty({ example: "fg5t5h45tt", description: "| Cattle: mother" })
    @IsString()
    mother_id: string;
}