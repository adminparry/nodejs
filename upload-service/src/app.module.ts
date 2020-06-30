import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { uploadDir } from './config/config';

import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [
    // ClientsModule.register([{ name: , transport: Transport.TCP}]),
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: uploadDir,
      }),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
