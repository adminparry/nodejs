import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MenuModule } from './menu/menu.module';
import { TableModule } from './table/table.module';
import { LineModule } from './line/line.module';

@Module({
  imports: [DatabaseModule, MenuModule, TableModule, LineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
