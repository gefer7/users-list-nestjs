import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "src/user/user.entity";

@Entity("emails")
export class Email {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'email', type: 'varchar', length: '100' })
    email: string;

    @ManyToOne(type => User, user => user.emails)
    user: User;
}