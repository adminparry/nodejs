import { Module } from '@nestjs/common';
import { LineService } from './line.service';
import { LineController } from './line.controller';
import { lineProvider } from 'src/providers/entity.provider';

@Module({
  providers: [lineProvider,LineService, ],
  controllers: [LineController]
})
export class LineModule {}
