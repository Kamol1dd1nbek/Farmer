import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]> (ROLES_KEY, [context.getHandler(), context.getClass()]);

    if (!requiredRoles) {
        return true;
    }

  const req = context.switchToHttp().getRequest();

  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new UnauthorizedException({
      message: "The worker has not been authorized",
    });
  }
  const bearer = authHeader.split(' ')[0];
  const token = authHeader.split(' ')[1];
  if (bearer !== 'Bearer' || !token) {
    throw new UnauthorizedException({
      message: "The worker has not been authorized",
    });
  }
  let user: any;
  try {
    user = this.jwtService.verify(token, {
        secret: process.env.REFRESH_TOKEN_KEY
    });

} catch (error) {
    console.log(error);
    throw new UnauthorizedException({message: "The worker has not been authorized"})
}
  req.user = user;
  console.log(requiredRoles)
  const permission = requiredRoles.includes(user.role);
  if (!permission) {
    throw new ForbiddenException({message: "You are not allowed"});
  }

  return true;
}
}