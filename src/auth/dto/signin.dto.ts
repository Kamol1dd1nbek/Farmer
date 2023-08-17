import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignInDto {
    @ApiProperty({ example: "karimc1k@gmail.com", description: "| Worker email" })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({ example: "12345678", description: "| Worker password" })
    @IsNotEmpty()
    @IsString()
    password: string;
}