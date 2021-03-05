import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {User} from "./User";

@Entity()
export class Blocked {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>User, user=>user.blocked)
    user: User;

}