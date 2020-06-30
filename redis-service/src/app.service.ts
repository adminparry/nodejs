import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';

@Injectable()
export class AppService {

  constructor(
    private readonly redisService: RedisService,
  ) {
    this.getClient();
  }
  getHello(): string {
    return 'Hello World!';
  }
  client;

  async getClient() {
    this.client = await this.redisService.getClient();

  }

  //设置值的方法
  async set(key: string, value: any, seconds?: number) {
    value = JSON.stringify(value);
    if (!this.client) {
      await this.getClient();
    }
    if (!seconds) {
      return await this.client.set(key, value);
    } else {
      return await this.client.set(key, value, 'EX', seconds);
    }
  }

  //获取值的方法
  async get(key: string) {
    if (!this.client) {
      await this.getClient();
    }
    var data = await this.client.get(key);
    if (!data) return;
    return JSON.parse(data);
  }


}
