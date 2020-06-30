import { Table, Model, Column } from "sequelize-typescript";
import { BaseEntity } from "./base.entity";


@Table({
    tableName: 'table',
    comment: 'table大概的例子',
})
export class TableEntity extends Model<BaseEntity>{

    @Column({
        comment: '名字'
    })
    name: string;
    @Column({
        comment: '年龄'
    })
    age: number;
    @Column({
        comment: '长度'
    })
    length: number;
    @Column({
        comment: '爱好'
    })
    hobby: string;
    
    
}