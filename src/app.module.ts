import { Module } from '@nestjs/common';
import { RolesModule } from './roles/roles.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CowroomTypesModule } from './cowroom_types/cowroom_types.module';
import { CowroomModule } from './cowroom/cowroom.module';
import { CattleModule } from './cattle/cattle.module';
import { HerdModule } from './herd/herd.module';
import { MilkModule } from './milk/milk.module';
import { AuthModule } from './auth/auth.module';
import { WorkerModule } from './worker/worker.module';
import { TechInCowroomModule } from './tech_in_cowroom/tech_in_cowroom.module';
import { TechniqueModule } from './technique/technique.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    JwtModule.register({}),
    MongooseModule.forRoot(process.env.MONGO_DB),
    RolesModule,
    CowroomTypesModule,
    CowroomModule,
    CattleModule,
    HerdModule,
    MilkModule,
    AuthModule,
    WorkerModule,
    TechInCowroomModule,
    TechniqueModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
