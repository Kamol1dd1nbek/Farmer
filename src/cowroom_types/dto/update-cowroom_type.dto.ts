import { PartialType } from '@nestjs/swagger';
import { CreateCowroomTypeDto } from './create-cowroom_type.dto';

export class UpdateCowroomTypeDto extends PartialType(CreateCowroomTypeDto) {}
