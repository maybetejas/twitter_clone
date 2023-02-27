import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Koos } from "./entity/Koos"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "tejas1234",
    database: "koos",
    synchronize: true,
    logging: false,
    entities: [User, Koos],
    migrations: [],
    subscribers: [],
})
