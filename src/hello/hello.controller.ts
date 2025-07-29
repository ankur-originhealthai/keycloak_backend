import { Controller, Get, Req } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getHello(@Req() req) {
    return {
      message: 'Hello from KeyCloak authentication server',
      user: req.user,
    };
  }
}
