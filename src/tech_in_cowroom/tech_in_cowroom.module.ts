import { Module } from '@nestjs/common';
import { TechInCowroomService } from './tech_in_cowroom.service';
import { TechInCowroomController } from './tech_in_cowroom.controller';

@Module({
  controllers: [TechInCowroomController],
  providers: [TechInCowroomService],
})
export class TechInCowroomModule {}
