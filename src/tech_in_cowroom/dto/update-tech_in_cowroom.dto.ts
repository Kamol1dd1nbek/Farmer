import { PartialType } from '@nestjs/swagger';
import { CreateTechInCowroomDto } from './create-tech_in_cowroom.dto';

export class UpdateTechInCowroomDto extends PartialType(CreateTechInCowroomDto) {}
