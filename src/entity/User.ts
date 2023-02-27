import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Koos } from "./Koos"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        unique: true
    })
    userName: string

    @Column({
        type: "varchar",
        length: 1000,
        default: "Hey there, I am using Koo!"
    })
    bio: string

    @Column()
    age: number

    @OneToMany(() => Koos, Koos => Koos.userId)
    koos: Koos[]
}
