import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {Challenge} from "./Challenge";
import {User} from "./User";

@Entity()
export class Rate {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    rated: Date;

    @Column()
    rate: 1|2|3|4|5

    @OneToOne(() => Challenge)
    @JoinColumn()
    challenge: Challenge

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}