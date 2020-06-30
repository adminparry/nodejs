import { Controller, Get } from '@nestjs/common';
import { CatsService } from '../service/cat.service';
import { Cat } from '../entity/cat.entity';

@Controller('cats')
export class CatsController {
  constructor(private service: CatsService){}
  @Get()
  async findAll(): Promise<Cat[]> {
    // return 'This action returns all cats';
    return this.service.findAll();
  }
}