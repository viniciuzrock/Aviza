import { Router, Request, Response } from "express"

class UserController {

    static async register(req: Request, res: Response) {
        res.status(200).send({
            message: "User registered"
        })
    }
}

export default UserController