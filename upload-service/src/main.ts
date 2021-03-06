import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const service = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    // port: 4000
  })
  await app.listen(3001);
  
  service.listen(() => {
    console.log(`tcp ${3000}`)
  })
}
bootstrap();
