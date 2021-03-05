import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn} from "typeorm";
import {User} from "./User";
import {Challenge} from "./Challenge";

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column({ type: 'date' })
    added: Date;

    @ManyToOne(() => User, user => user.photos)
    user: User;

    @OneToOne(() => Challenge)
    @JoinColumn()
    challenge: Challenge;

}