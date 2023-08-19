import { Module } from '@nestjs/common';
import { CowroomTypesService } from './cowroom_types.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CowroomType, CowroomTypeSchema } from './schemas/cowroom_type.schema';
import { CowroomsTypesController } from './cowroom_types.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CowroomType.name, schema: CowroomTypeSchema },
    ]),
    JwtModule.register({})
  ],
  controllers: [CowroomsTypesController],
  providers: [CowroomTypesService],
})
export class CowroomTypesModule {}
