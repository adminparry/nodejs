import { MENU } from "src/constants/menu.constants";
import { Menu } from "src/entity/menu.entity";
import { LINE } from "src/constants/line.constants";
import { Line } from "src/entity/line.entity";

export interface IValueProvider {
    provide: string;
    useValue: Function;
}
export const menuProvider: IValueProvider = {
    provide: MENU,
    useValue: Menu
}

export const lineProvider: IValueProvider = {
    provide: LINE,
    useValue: Line
}