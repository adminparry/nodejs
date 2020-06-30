import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { Sequelize } from 'sequelize-typescript';
@Injectable()
export class DatabaseService {
    
    provide: 'SEQUELIZE'

    async useFactory() {
        const sequelize = new Sequelize({
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '123456',
            database: 'nest',
          });
          sequelize.addModels([User]);
          await sequelize.sync();
          return sequelize;
    }
}
