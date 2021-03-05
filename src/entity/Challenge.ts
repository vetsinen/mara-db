import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Category} from "./Category";
import {User} from "./User";

@Entity()
export class Challenge {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    coverPhotoUrl: string;

    @Column({type: 'date'})
    acceptenceStart: Date;

    @Column({type: 'date'})
    voteStart: Date;

    @Column({type: 'date'})
    voteExpires: Date;

    @Column()
    isPrivate: boolean

    @ManyToOne(() => Category, category => category.challenges)
    category: Category;

    @ManyToOne(() => Category, user => user.challenges)
    initiator: User;

}