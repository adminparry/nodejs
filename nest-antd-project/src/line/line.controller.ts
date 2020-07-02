import { Controller, Get, Param, Query } from '@nestjs/common';
import { LineService } from './line.service';

@Controller('line')
export class LineController {
    constructor(
        private lineService : LineService
    ){}
    @Get()
    async line(@Query('year') year){
       
        return this.lineService.findYear(year);
    }
    @Get('pie')
    async pie(){
        return this.lineService.findFullYear();
    }
    
}
