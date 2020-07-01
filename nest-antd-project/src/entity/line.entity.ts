import { Table, Model, Column } from "sequelize-typescript";
import { BaseEntity } from "./base.entity";

@Table({
    tableName: 'line',
    comment: '折线图'
})
export class Line extends Model<BaseEntity>{
    @Column({
        comment: '代表某一个值'
    })
    value: number
    @Column({
        comment: '时间'
    })
    time: Date
}