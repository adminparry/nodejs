import { Controller, Get, Inject } from '@nestjs/common';
import { TEST_SERVICE } from './test.constants';
import { ClientProxy, MessagePattern, Client, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('test')
export class TestController {
    // constructor(@Inject(TEST_SERVICE) private readonly client: ClientProxy) {}
    @Client({transport: Transport.TCP})
    client: ClientProxy

    @Get()
    execute(): Observable<number> {
      const pattern = { cmd: 'sum' };
      const data = [1, 2, 3, 4, 5];
      return this.client.send<number>(pattern, data);
    }
  
    @MessagePattern({ cmd: 'sum' })
    sum(data: number[]): number {
      return (data || []).reduce((a, b) => a + b);
    }
}
