import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsOptional, IsPhoneNumber, IsString, MinLength } from "class-validator";

export class UpdateWorkerDto {
    @ApiProperty({ example: "Alimov Salim", description: "| Worker name" })
    @IsOptional()
    @IsString()
    full_name?: string;

    @ApiProperty({ example: "alimov@gmail.com", description: "| Worker email" })
    @IsOptional()
    @IsString()
    @IsEmail()
    email?: string;

    @ApiProperty({ example: "+998991234567", description: "| Worker phone number" })
    @IsOptional()
    @IsString()
    @IsPhoneNumber()
    phone?: string;

    @ApiProperty({ example: "12345678", description: "| Worker password" })
    @IsOptional()
    @IsString()
    @MinLength(6)
    password?: string;

    @ApiProperty({ example: "12345678", description: "| Worker confirm password" })
    @IsOptional()
    @IsString()
    @MinLength(6)
    confirm_password?: string;

    @ApiProperty({ example: "5rf45f34edw4g", description: "| Worker role" })
    @IsOptional()
    @IsString()
    @MinLength(6)
    role_id?: string;

    @ApiProperty({ example: "1200000", description: "| Worker salary" })
    @IsOptional()
    @IsNumber()
    salary?: number;
}
