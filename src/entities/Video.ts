
import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToMany, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4  as uuid} from "uuid"
import { Category } from "./Category";

@Entity("videos")
export class Video {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @Column()
    category_id: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id"})
    category: Category

    @CreateDateColumn()
    created_at: Date;
}