import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHerdDto {
  @ApiProperty({ example: 'Vet', description: '| Herd name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'Heals animals', description: '| Herd supervisor' })
  @IsNotEmpty()
  @IsString()
  supervisor_id: string;
}
