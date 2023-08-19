import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTechInCowroomDto {
    @ApiProperty({ example: "64e05820ae6a072d4b0c24a7", description: "Technique id" })
    @IsNotEmpty()
    @IsString()
    technique_id: string;

    @ApiProperty({ example: "64e05820ae6a065d4b0c24a7", description: "Cowroom id" })
    @IsNotEmpty()
    @IsString()
    cowroom_id: string;

    @ApiProperty({ example: "90e05820ae6a065d4b0c24a7", description: "Incharge id" })
    @IsNotEmpty()
    @IsString()
    incharge_id: string;
}