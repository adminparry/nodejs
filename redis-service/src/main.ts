import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: {
      url: 'redis://localhost:6379',
      
    },
  })

  await app.startAllMicroservicesAsync();

  await app.listen(3002);


  // const redis = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  //   transport: Transport.REDIS,
  //   options: {
  //     url: 'redis://localhost:6379',
      
  //   },
  // });

  // redis.listen(() => {
  //   console.log('redis service is started')
  // })
}
bootstrap();
