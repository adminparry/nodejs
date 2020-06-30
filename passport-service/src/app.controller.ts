import { Controller, Get, UseGuards, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // async login(@Req() req) {
  //   return req.user;
  // }

  @UseGuards(JwtAuthGuard)
  @Post('auth/login')
  async login1(@Req() req) {
    return this.authService.login(req.user);
  }
}
