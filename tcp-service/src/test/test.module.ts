import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TEST_SERVICE } from './test.constants';

@Module({
  // imports: [
  //   ClientsModule.register([
  //     { name: TEST_SERVICE, transport: Transport.TCP }
  //   ])
  // ],
  providers: [TestService],
  controllers: [TestController]
})
export class TestModule { }
