import {
  Injectable,
  Controller,
  BadRequestException,
  ForbiddenException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Worker } from '../worker/schemas/worker.schema';
import { Model } from 'mongoose';
import { SignUpDto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RolesService } from '../roles/roles.service';
import { Response } from 'express';
import { SignInDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Worker.name) private readonly workerModel: Model<Worker>,
    private readonly jwtService: JwtService,
    private readonly roleService: RolesService,
  ) {}

  // SIGN UP
  async signup(signupDto: SignUpDto, res: Response) {
    const isHave = await this.workerModel.findOne({ email: signupDto.email });
    const isHave2 = await this.workerModel.findOne({ phone: signupDto.phone });

    if ( isHave || isHave2 ) {
        throw new BadRequestException("Registered by this email or phone number");
    }

    if (signupDto.confirm_password !== signupDto.password) {
      throw new BadRequestException("Passwords isn't match");
    }

    const hashed_password = await bcrypt.hash(signupDto.password, 7);

    const newWorker = await this.workerModel.create({
      ...signupDto,
      hashed_password,
    });
    const tokens = await this.getTokens(newWorker);
    console.log(tokens);

    //tokens da role name ni qilgandiom
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    newWorker.hashed_refresh_token = hashed_refresh_token;
    await newWorker.save();

    res.cookie('refreshToken', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return newWorker;
  }

  // GET TOKENS
  async getTokens(worker: Worker) {
    const role = await this.roleService.findOne(worker.role_id);
    const jwPayload = {
      // @ts-ignore
      id: worker._id,
      role: role.name,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(jwPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  //SIGN OUT
  async signout(refreahToken: string, res: Response) {
    const workerData = await this.jwtService.verify(refreahToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });

    if (!workerData) {
      throw new ForbiddenException('Worker not found');
    }

    const worker = await this.workerModel.findById(workerData.id);
    if (!worker) {
      throw new ForbiddenException('Worker not found');
    }

    worker.hashed_refresh_token = null;
    worker.role_id = null;
    await worker.save();

    res.clearCookie('refreshToken');
    const response = {
      message: 'Logged out successfully',
      worker: worker,
    };
    return response;
    return 1;
  }

  
  // REFREShTOKEN

  async refreshToken(worker_id: string, refreshToken: string, res: Response) {
    const decodedToken = this.jwtService.decode(refreshToken);
    if (worker_id != decodedToken['id']) {
      throw new BadRequestException('Worker not found');
    }
    const worker = await this.workerModel.findById(worker_id);
    if (!worker || !worker.hashed_refresh_token) {
      throw new BadRequestException('Worker not found');
    }

    const tokenMatch = await bcrypt.compare(
      refreshToken,
      worker.hashed_refresh_token,
    );

    if (!tokenMatch) {
      throw new ForbiddenException('Forbidden');
    }

    const tokens = await this.getTokens(worker);

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    worker.hashed_refresh_token = hashed_refresh_token;
    await worker.save();

    res.cookie('refreshToken', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      message: 'Worker\'s refresh token refreshed successfully',
      tokens,
    };
    return response;
  }

  // SIGN IN
  async signin(signinDto: SignInDto, res: Response){
    const { email } = signinDto;
    const worker = await this.workerModel.findOne({ email });

    if ( !worker ) {
      throw new BadRequestException("Email or password wrong");
    }

    const isMatch = await bcrypt.compare(signinDto.password, worker.hashed_password);
console.log(isMatch);

    if ( !isMatch ) {
      throw new BadRequestException("Email or password wrong");
    }

    const tokens = await this.getTokens(worker);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    worker.hashed_refresh_token = hashed_refresh_token;
    await worker.save();

    res.cookie("refreshToken", {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true
    });

    const response = {
      message: 'Worker logged in successfully',
      tokens,
    };

    return response;
  }
}
