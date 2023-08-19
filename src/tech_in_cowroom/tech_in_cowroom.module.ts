import { Module } from '@nestjs/common';
import { TechInCowroomService } from './tech_in_cowroom.service';
import { TechInCowroomController } from './tech_in_cowroom.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TechInCowroom, TechInCowroomSchema } from './schemas/tech_in_cowroom.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TechInCowroom.name, schema: TechInCowroomSchema }])
  ],
  controllers: [TechInCowroomController],
  providers: [TechInCowroomService],
})
export class TechInCowroomModule {}
