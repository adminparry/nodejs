import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { menuProvider } from '../providers/entity.provider';

@Module({
  providers: [menuProvider, MenuService, ],
  controllers: [MenuController]
})
export class MenuModule {}
