import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Wish {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    userId: number;

    @Column()
    content: string;

    constructor(userId: number, content: string) {
        this.userId = userId;
        this.content = content;
    }
}
