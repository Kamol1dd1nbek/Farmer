import { Module } from '@nestjs/common';
import { CowroomService } from './cowroom.service';
import { CowroomController } from './cowroom.controller';

@Module({
  controllers: [CowroomController],
  providers: [CowroomService],
})
export class CowroomModule {}
