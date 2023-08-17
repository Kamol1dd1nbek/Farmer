import { PartialType } from '@nestjs/swagger';
import { CreateMilkDto } from './create-milk.dto';

export class UpdateMilkDto extends PartialType(CreateMilkDto) {}
