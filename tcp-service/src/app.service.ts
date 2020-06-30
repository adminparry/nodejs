import { Injectable } from '@nestjs/common';
import { Client, Transport, ClientProxy} from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  @Client({ transport: Transport.TCP,options:{ port: 5000 }})
  client: ClientProxy
  // @Client({ transport: Transport.TCP,options:{ port: 5000 }})
  // client1: ClientProxy
  

  getHello(): Observable<number> {

    const pattern = { cmd: 'sum' };
    const payload = [1, 2, 3];
    return this.client.send(pattern, payload);
    // return 'Hello World!';
  }

  test(req){
    return this.client.send({ cmd: 'upload.file'}, req)
  }
}
