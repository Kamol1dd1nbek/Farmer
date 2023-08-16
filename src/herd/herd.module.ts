import { Module } from '@nestjs/common';
import { HerdService } from './herd.service';
import { HerdController } from './herd.controller';

@Module({
  controllers: [HerdController],
  providers: [HerdService],
})
export class HerdModule {}
