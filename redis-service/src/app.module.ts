import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule} from 'nestjs-redis'
import { redis } from './config';

@Module({
  imports: [
    RedisModule.register(redis)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
