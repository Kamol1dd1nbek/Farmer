import { PartialType } from '@nestjs/swagger';
import { CreateHerdDto } from './create-herd.dto';

export class UpdateHerdDto extends PartialType(CreateHerdDto) {}
