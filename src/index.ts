import { getRepository } from "typeorm";
import { AppDataSource } from "./data-source"
import { User } from "./entity/User";
import { start } from "./connection";

AppDataSource.initialize().then(async () => {

    start();

}).catch(error => console.log(error))
