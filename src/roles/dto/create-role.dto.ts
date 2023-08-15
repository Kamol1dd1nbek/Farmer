import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({ example: "Vet", description: "| Role name" })
    name: string;

    @ApiProperty({ example: "Heals animals", description: "| Role description" })
    description: string
}