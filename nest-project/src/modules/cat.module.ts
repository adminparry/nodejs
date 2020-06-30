import { Module } from '@nestjs/common';
import { CatsController } from '../controller/cat.controller';
import { CatsService } from '../service/cat.service';
import { catsProviders } from '../provider/cat.provider';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CatsController],
  providers: [
    CatsService,
    ...catsProviders,
  ],
})
export class CatsModule {}