import { Module } from '@nestjs/common';
import { CowroomService } from './cowroom.service';
import { CowroomController } from './cowroom.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cowroom, CowroomSchema } from './schemas/cowroom.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cowroom.name, schema: CowroomSchema }]),
    JwtModule
  ],
  controllers: [CowroomController],
  providers: [CowroomService],
})
export class CowroomModule {}
