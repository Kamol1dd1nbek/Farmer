import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CowroomTypesModule } from './cowroom_types/cowroom_types.module';
import { CowroomModule } from './cowroom/cowroom.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGO_DB),
    RolesModule,
    CowroomTypesModule,
    CowroomModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
