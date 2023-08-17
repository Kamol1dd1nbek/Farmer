import {
  UnauthorizedException,
  ExecutionContext,
  createParamDecorator,
} from '@nestjs/common';

export const cookieGetter = createParamDecorator(
  async (data: string, context: ExecutionContext): Promise<string> => {
    const request = context.switchToHttp().getRequest();
    const refresh_token = request.cookies[data];
    if (!refresh_token) {
      throw new UnauthorizedException('Token is not defined');
    }    
    return refresh_token;
  },
);