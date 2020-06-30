import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database.module';
import { CatsModule } from './modules/cat.module';
import { MathModule } from './math/math.module';

@Module({
  imports: [DatabaseModule, MathModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
