import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Photo} from "./Photo";
import {Blocked} from "./Blocked";
import {Rate} from "./Rate";
import {Challenge} from "./Challenge";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    hash: string;

    @Column()
    isprivate: boolean

    @OneToMany(()=> Blocked, blocked=> blocked.user)
    blocked: Blocked

    @OneToMany(() => Photo, photo => photo.user)
    photos: Photo[];

    @OneToMany(()=>Rate, rate => rate.user)
    rates: Rate[];

    @OneToMany(()=> Challenge, challenge=> challenge.initiator)
    challenges: Challenge
}
