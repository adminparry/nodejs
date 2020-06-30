import { Controller, Get, Post, Req, UseInterceptors, UploadedFile, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Observable<number> {
    return this.appService.getHello();
  }
  @Post('/test')
  @UseInterceptors( FileInterceptor('file'))
  test(@UploadedFile() file){
    console.log(file)
    return this.appService.test(file);
  }
}
