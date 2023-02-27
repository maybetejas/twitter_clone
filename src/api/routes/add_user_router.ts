import { Express, Router } from "express";
import { add_user, add_user_test } from "../controllers/add_user.controller";



export const add_user_router = Router();

add_user_router.route("/").post(add_user)
add_user_router.route("/test").get(add_user_test)