import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsPhoneNumber, IsString, MinLength } from "class-validator";

export class UpdateWorkerDto {
    @ApiProperty({ example: "Alimov Salim", description: "| Worker name" })
    @IsString()
    full_name?: string;

    @ApiProperty({ example: "alimov@gmail.com", description: "| Worker email" })
    @IsString()
    @IsEmail()
    email?: string;

    @ApiProperty({ example: "+998991234567", description: "| Worker phone number" })
    @IsString()
    @IsPhoneNumber()
    phone?: string;

    @ApiProperty({ example: "12345678", description: "| Worker password" })
    @IsString()
    @MinLength(6)
    password?: string;

    @ApiProperty({ example: "12345678", description: "| Worker confirm password" })
    @IsString()
    @MinLength(6)
    confirm_password?: string;

    @ApiProperty({ example: "5rf45f34edw4g", description: "| Worker role" })
    @IsString()
    @MinLength(6)
    role_id?: string;

    @ApiProperty({ example: "1200000", description: "| Worker salary" })
    @IsNumber()
    salary?: number;
}
