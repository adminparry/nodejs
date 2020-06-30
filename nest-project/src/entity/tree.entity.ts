import { Table, Column, Model } from 'sequelize-typescript';

@Table({
    tableName: 'tree'
})
export class Tree extends Model<Tree> {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;
}