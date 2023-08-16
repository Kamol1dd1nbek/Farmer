import { Module } from '@nestjs/common';
import { HerdService } from './herd.service';
import { HerdController } from './herd.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Herd, HerdSchema } from './schemas/herd.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Herd.name, schema: HerdSchema }])
  ],
  controllers: [HerdController],
  providers: [HerdService],
})
export class HerdModule {}
