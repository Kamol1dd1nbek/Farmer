import { Module } from '@nestjs/common';
import { MilkService } from './milk.service';
import { MilkController } from './milk.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Milk, MilksSchema } from './schemas/milk.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Milk.name, schema: MilksSchema }])
  ],
  controllers: [MilkController],
  providers: [MilkService],
})
export class MilkModule {}
