
import {  Table, Column, Model } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';

@Table
export class User extends Model<User> {
    @IsString()
    @IsNotEmpty()
    @Column
    name: string;
    
    @IsString()
    @IsNotEmpty()
    @Column
    password: string;
    
    @Column
    salt: string;
}

export const USER = 'USER';

export const userProvider = {
    provide: USER,
    useValue: User
}