import { Module } from '@nestjs/common';
import { CowroomService } from './cowroom.service';
import { CowroomController } from './cowroom.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cowroom, CowroomSchema } from './schemas/cowroom.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cowroom.name, schema: CowroomSchema }]),
  ],
  controllers: [CowroomController],
  providers: [CowroomService],
})
export class CowroomModule {}
