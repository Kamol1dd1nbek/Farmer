import { Module } from '@nestjs/common';
import { CowroomTypesService } from './cowroom_types.service';
import { CowroomTypesController } from './cowroom_types.controller';

@Module({
  controllers: [CowroomTypesController],
  providers: [CowroomTypesService],
})
export class CowroomTypesModule {}
