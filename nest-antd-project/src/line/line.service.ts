import { Injectable, Inject } from '@nestjs/common';
import { Line } from 'src/entity/line.entity';
import { Sequelize } from 'sequelize-typescript';
import { LINE } from 'src/constants/line.constants';
import { Op } from 'sequelize';

@Injectable()
export class LineService {
    constructor(
        @Inject(LINE) private respository: typeof Line
    ) { }

//     select SUM(t.value),SUBSTR(t.time,1,7) 
//  from line t 
//  WHERE  t.time 
//  like '2020-0%' 
//  group by SUBSTR(t.time,1,7)

 
    async findAll(year: number): Promise<Line[]>{
        return this.respository.findAll({
            attributes: [[Sequelize.fn('SUM', Sequelize.col('value')), 'value'],[Sequelize.fn('SUBSTR', Sequelize.col('time'), 1, 7),'time']],
            group: [Sequelize.fn('SUBSTR', Sequelize.col('time'), 1, 7)],
            where: {
                time:{
                    [Op.startsWith]: year
                }
                
            }
        });
    }
}
