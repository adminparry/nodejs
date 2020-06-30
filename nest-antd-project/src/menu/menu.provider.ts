import { MENU } from "src/constants/menu.constants";
import { Menu } from "src/entity/menu.entity";

export interface IValueProvider {
    provide: string;
    useValue: Function;
}
export const menuProvider: IValueProvider = {
    provide: MENU,
    useValue: Menu
}