import { Model, Column } from "sequelize-typescript";


export class BaseEntity extends Model<BaseEntity> {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        comment: 'pk'
    })
    pkid: number;
}