import { Router, Request, Response } from "express"
import UserController from "../controllers/UserController"

const router = Router()

router.get("/register", UserController.register)
router.get("/login", UserController.login)

export default router