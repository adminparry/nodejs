import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const rpcConfig = {
  //   transport: Transport.GRPC,
  //   options: {
  //     package: 'hero',
  //     protoPath: join(__dirname, 'hero/hero.proto'),
  //   },
  // }
  const tcpConfig: MicroserviceOptions = {
    transport: Transport.TCP,
    options: { retryAttempts: 5, retryDelay: 3000 , port: 5000},
  }
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.createMicroservice(
    AppModule,
    tcpConfig,
  );
  // app.connectMicroservice(rpcConfig);
  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.TCP,
  //   options: { retryAttempts: 5, retryDelay: 3000 },
  // });
  
  // app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);

  // await app.startAllMicroservicesAsync();
  // await app.listen(3000);
  app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
