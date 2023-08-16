import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCowroomTypeDto {
  @ApiProperty({ example: 'Winter', description: '| Cowroom type name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Adapted for the winter season',
    description: '| Cowroom type description',
  })
  @IsString()
  description: string;
}
