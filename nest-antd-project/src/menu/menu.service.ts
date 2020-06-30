import { Injectable, Inject } from '@nestjs/common';
import { MENU } from 'src/constants/menu.constants';
import { Menu } from 'src/entity/menu.entity';

@Injectable()
export class MenuService {
    constructor(
        @Inject(MENU) private repository : typeof Menu
    ) { }

    async findAll(): Promise<Menu[]> {
        return this.repository.findAll();
    }
}
