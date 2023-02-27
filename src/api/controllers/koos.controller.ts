import { Request, Response } from "express-serve-static-core"

export const getAllKoos = async (req: Request, res: Response) => {
    res.status(200).json({
        koo: "koo"
    })
}

export const getAllKoosTest = async (req: Request, res: Response) => {
    res.status(200).json({
        koo: "test koo"
    })
}