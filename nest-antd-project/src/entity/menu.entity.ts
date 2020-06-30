import { Table, Model, Column } from "sequelize-typescript";

@Table({
    tableName: 'menu',
    comment: '树形菜单'
})
export class Menu extends Model<Menu> {

    @Column({
        primaryKey: true,
        autoIncrement: true,
        comment: '主键'
    })
    id: number;

    @Column
    pid: number;

    @Column
    name: string

}