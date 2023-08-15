import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {
    @ApiProperty({ example: "Vet", description: "| Role name" })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: "Heals animals", description: "| Role description" })
    @IsString()
    description: string
}