
import { Entity, Column, CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("category")
export class Category {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

}