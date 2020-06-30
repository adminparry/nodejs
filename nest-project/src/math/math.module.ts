import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MATH_SERVICE } from './math.constants';
import { MathController } from './math.controller';
import { MulterModule } from '@nestjs/platform-express'
import { CatsService } from '../service/cat.service';
import { catsProviders } from '../provider/cat.provider';
import {join } from 'path';

@Module({
  imports: [
    MulterModule.register({
      dest: join(__dirname, '../../upload'),
      
    })
    // ClientsModule.register([{ name: MATH_SERVICE, transport: Transport.TCP }]),
    
    
  ],
  controllers: [MathController],
  providers: [
    CatsService,
    ...catsProviders,
  ],
})
export class MathModule {}