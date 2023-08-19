import { Module } from '@nestjs/common';
import { TechniqueService } from './technique.service';
import { TechniqueController } from './technique.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Technique, TechniqueSchema } from './schemas/technique.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Technique.name, schema: TechniqueSchema },
    ]),
  ],
  controllers: [TechniqueController],
  providers: [TechniqueService],
})
export class TechniqueModule {}
