import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({unique : true})
    username:string;

    @Column({unique : true})
    email:string;

    @Column()
    password:string;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date
}
