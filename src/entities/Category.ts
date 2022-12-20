
import { Entity, Column, CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { v4  as uuid} from "uuid"
@Entity("categories")
export class Category {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if (!this.id) {
            this.id = uuid();
        }
    }

}