import { Request, Response } from "express";
import { User } from "../../entity/User";
import { AppDataSource } from "../../data-source";


export const add_user = async (req: Request, res: Response) => {
    const { name, age1 } = req.body;

    const userRepo = AppDataSource.getRepository(User);
    const user = new User();
    user.userName = name;
    user.age = age1;

    await userRepo.save(user)

    res.send("data saved succesfully");
}

export const add_user_test = async (req: Request, res: Response) => {
    res.status(200).json({
        "add_user": "add_user_test"
    })
}
