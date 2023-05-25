import { Request, Response } from "express"

export const uploadPicture = (req: Request, res: Response) => {
    if (!req.file.path) {
        res.status(200).json("")
    }

    else {
        res.status(200).json(req.file.path)
    }
}