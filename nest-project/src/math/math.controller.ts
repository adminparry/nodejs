import { Controller, Get, Inject, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { MATH_SERVICE } from './math.constants';
import { CatsService } from '../service/cat.service';
import { Cat } from '../entity/cat.entity';
import { FileInterceptor, MulterModule } from '@nestjs/platform-express';

@Controller()
export class MathController {
  constructor(
    // @Inject(MATH_SERVICE) private readonly client: ClientProxy,
    private catservice: CatsService
  ) { }

  // @Get()
  // execute(): Observable<number> {
  //   const pattern = { cmd: 'sum' };
  //   const data = [1, 2, 3, 4, 5];
  //   return this.client.send<number>(pattern, data);
  // }

  @MessagePattern({ cmd: 'sum' })
  sum(data: number[]): Promise<Cat[]> {
    return this.catservice.findAll();
    // return (data || []).reduce((a, b) => a + b);
  }
  @MessagePattern({ cmd: 'upload.file' })
  // @UseInterceptors(FileInterceptor('file'))
  test(data){
    // return this.catservice.findAll();
    // return (data || []).reduce((a, b) => a + b);
    console.log(data);

    return 999;
  }
  
}