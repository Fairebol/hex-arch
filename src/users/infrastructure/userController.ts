import { Request, Response } from "express";
import { returnInfo } from "../application/returnInfo";

export class UserController
{
    constructor(private readonly info: returnInfo) {}

    async run(req: Request, res: Response) {
        const UserID = req.params.id;
        await this.info.info(UserID);
        res.status(200).send();
    }
}
