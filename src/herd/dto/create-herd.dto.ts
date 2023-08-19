import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHerdDto {
  @ApiProperty({ example: 'Beta1', description: '| Herd name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: '64ddf29369608e5e645ba5aa', description: '| Herd supervisor' })
  @IsNotEmpty()
  @IsString()
  supervisor_id: string;
}
