import { Module } from '@nestjs/common';
import { CowroomTypesService } from './cowroom_types.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CowroomType, CowroomTypeSchema } from './schemas/cowroom_type.schema';
import { CowroomsTypesController } from './cowroom_types.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CowroomType.name, schema: CowroomTypeSchema },
    ]),
  ],
  controllers: [CowroomsTypesController],
  providers: [CowroomTypesService],
})
export class CowroomTypesModule {}
