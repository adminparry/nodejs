import { Injectable, Inject } from '@nestjs/common';
// import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from '../entity/cat.entity';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CATS_REPOSITORY') private catsRepository: typeof Cat,
    @Inject('SEQUELIZE') private sequeize: Sequelize,
    
  ) { }

  async findAll(): Promise<Cat[]> {
    this.sequeize.transaction();
    return this.catsRepository.findAll<Cat>();
  }
}