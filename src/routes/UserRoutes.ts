import { Router, Request, Response } from "express"
import UserController from "../controllers/UserController"

const router = Router()

router.get("/register", UserController.register)

export default router