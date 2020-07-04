import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { readFileSync } from 'fs';

async function bootstrap() {
  // const httpsOptions = {
  //   key: readFileSync('./secrets/private-key.pem'),
  //   cert: readFileSync('./secrets/public-certificate.pem'),
  // };
  const app = await NestFactory.create(AppModule, {
    // httpsOptions
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards();

  await app.listen(3000);
}
bootstrap();
