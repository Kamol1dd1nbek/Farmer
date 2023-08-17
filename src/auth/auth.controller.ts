import { WorkerService } from './../worker/worker.service';
import { Controller, Body, Post, Res, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SignUpDto } from './dto/signup.dto';
import { AuthService } from './auth.service';
import { Response } from "express";
import { cookieGetter } from "../decorators/cookieGetter.decorator";
import { SignInDto } from './dto/signin.dto';

@ApiTags("Auth")
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiOperation({ summary: "| Sign Up" })
    @Post("signup")
    signup(@Body() signupDto: SignUpDto, @Res({ passthrough: true }) res: Response) {
        return this.authService.signup(signupDto, res);
    }

    @ApiOperation({ summary: "| Sign Out" })
    @Post("signout")
    signout(
        @cookieGetter("refreshToken") refreshToken: string,
        @Res({ passthrough: true }) res: Response
    ) {
        return this.authService.signout( refreshToken, res );
    }

    @ApiOperation({ summary: "| Refresh token" })
    @Post("refresh/:id")
    refresh(
        @Param("id") id: string,
        @cookieGetter("refreshToken") refreshToken: string,
        @Res({ passthrough: true }) res: Response
    ) {
        return this.authService.refreshToken(id, refreshToken, res)
    }

    @ApiOperation({ summary: "| Sign In" })
    @Post("signin")
    signin(
        @Body() signinDto: SignInDto,
        @Res({ passthrough: true }) res: Response
    ) {
        return this.authService.signin(signinDto, res);
    }
}
