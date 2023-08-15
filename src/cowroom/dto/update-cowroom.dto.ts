import { PartialType } from '@nestjs/swagger';
import { CreateCowroomDto } from './create-cowroom.dto';

export class UpdateCowroomDto extends PartialType(CreateCowroomDto) {}
