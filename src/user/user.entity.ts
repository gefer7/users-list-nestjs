import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Email } from "src/email/email.entity";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', type: 'varchar', length: '80' })
    name: string;

    @Column({ name: 'phone', type: 'varchar', length: '20' })
    phone: string;

    @OneToMany(type => Email, email => email.user, { cascade: true, eager: true })
    emails: Email[];
}