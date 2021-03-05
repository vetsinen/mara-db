import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Challenge} from "./Challenge";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToMany(() => Challenge, challenge => challenge.category)
    challenges: Challenge[];

}