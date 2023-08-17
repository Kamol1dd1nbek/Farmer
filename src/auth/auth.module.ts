import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Worker, WorkerSchema } from '../worker/schemas/worker.schema';
import { JwtModule } from '@nestjs/jwt';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Worker.name, schema: WorkerSchema }]),
    JwtModule.register({}),
    RolesModule
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}