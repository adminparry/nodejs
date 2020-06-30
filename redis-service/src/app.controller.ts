import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Payload, MessagePattern, Ctx, RedisContext, Client, Transport, ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { query } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Client({ transport: Transport.REDIS })
  client: ClientProxy

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }



  @Get('/redisget')
  execute() {
    return this.client.send('redis.get', 'nest');
  }
  @Get('/redisset')
  sets(@Query() query) {
    console.log(query);
    return this.client.send('redis.set', { key: 'nest', value: query , seconds: 6});
  }


  // 这个东西只能放在controller中
  @MessagePattern('redis.get')
  getDate(@Payload() data: string, @Ctx() context: RedisContext) {


    return this.appService.get(data)
  }
  // 这个东西只能放在controller中
  @MessagePattern('redis.set')
  set(@Payload() data: Idata, @Ctx() context: RedisContext) {

    return this.appService.set(data.key, data.value, data.seconds)
  }



}
interface Idata {
  key: string;
  value: string | Object;
  seconds?: number;
}