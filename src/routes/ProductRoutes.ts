import { Router, Request, Response } from "express"
import ProductController from "../controllers/ProductController"
const router = Router()

router.get("/products", ProductController.getProducts)
router.get("/email", ProductController.sendEmail)

export default router
