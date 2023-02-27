import { Express, Router } from "express";
import { getAllKoos, getAllKoosTest } from "../controllers/koos.controller";


export const router = Router();

router.route("/").get(getAllKoos);
router.route("/test").get(getAllKoosTest);