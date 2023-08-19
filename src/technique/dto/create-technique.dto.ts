import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTechniqueDto {
    @ApiProperty({ example: "Vansun", description: "Technique: name" })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: "Milking machine", description: "Technique: description" })
    @IsNotEmpty()
    @IsString()
    description: string;
}
