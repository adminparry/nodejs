import { SEQUELIZE } from "src/constants/sequelize.constants";
import { Sequelize } from "sequelize-typescript";
import { Menu } from "src/entity/menu.entity";

interface IfactoryProvider {
    provide: string;
    useFactory: Function
}
export const databaseProvider = {
    provide: SEQUELIZE,
    useFactory: async () => {
        const sequelize = new Sequelize({
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '123456',
            database: 'antd',
        });
        sequelize.addModels([Menu]);
        await sequelize.sync();
        return sequelize;
    } 
}