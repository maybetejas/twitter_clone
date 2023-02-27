import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class Koos {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        length: 1250
    })
    text: string

    @ManyToOne(() => User, User => User.id)
    userId: User
}
