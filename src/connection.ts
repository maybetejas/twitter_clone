import { error } from "console";
import express, { Request, Response } from "express";
import { router } from "./api/routes/routes";
import { add_user_router } from "./api/routes/add_user_router";
import bodyParser from "body-parser";

const app = express()
const PORT = process.env.PORT || 3100

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use("/koo", router)
app.use("/add-user", add_user_router)

app.get('/', (req: Request, res: Response) => {
    res.send("Kooooooooooooooooooooooo")
})

export const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log("connected!");
        })
    } catch (error) {
        console.log(error);
    }
}
