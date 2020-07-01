import { Controller, Get } from '@nestjs/common';
import { LineService } from './line.service';

@Controller('line')
export class LineController {
    constructor(
        private lineService : LineService
    ){}
    @Get()
    async line(){
        return this.lineService.findAll(2020);
    }
}
