import { Module } from '@nestjs/common';
import { CattleService } from './cattle.service';
import { CattleController } from './cattle.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cattle, CattleSchema } from "./schemas/cattle.schema";
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cattle.name, schema: CattleSchema }]),
    JwtModule.register({})
  ],
  controllers: [CattleController],
  providers: [CattleService],
})
export class CattleModule {}
