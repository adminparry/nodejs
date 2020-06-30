import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import {SequelizeModule  } from '@nestjs/sequelize';


@Module({
  imports: [AuthModule, UsersModule, DatabaseModule,SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'nest',
  })],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
