import { Controller, Get, UseGuards, Post, Req, HttpService, Res, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './common/guard/local.guard';
import { JwtAuthGuard } from './common/guard/jwt.guard';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import * as https from 'https';
import { UsersService } from './users/users.service';
import { User } from './entity/user.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private userService: UsersService,
    private httpService: HttpService,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(): string {

    return this.appService.getHello();
  }
  @Get('baidu')
  baidu(): Observable<AxiosResponse<any>> {
    return this.httpService.get('https://www.baidu.com');

  }
  // @Get('test')
  // async test(@Res() res){
   
  //   const ret = await this.stack();
  //   console.log(ret);
  //   res.end(ret)
  // }

  // async stack(){
  //   return await new Promise((resolve, reject) => {
  //     https.get('https://www.baidu.com', (res) => {
  //       let rawData = '';
  
    
  //       res.on('data', (chunk) => { rawData += chunk; });
  //       res.on('end', () => {
         
  //         resolve(rawData);
  //       })
  //     })
  //   });
  // }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) {
    return await this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() body: User){
    const ret = await this.userService.register(body);
    return ret;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async login1(@Req() req) {
    return req.user;
    // return this.authService.login(req.user);
  }


}
