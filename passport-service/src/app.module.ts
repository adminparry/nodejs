import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entity/user.entity';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: '.development.env',
      ignoreEnvFile: true,
      isGlobal: true
    }),
    HttpModule,
    AuthModule,
    UsersModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nest',
      models: [User],
      autoLoadModels: true,
      synchronize: true,
      // modelPaths: ["/src/entity/**/*.entity{.ts,.js}"],
    })],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }
