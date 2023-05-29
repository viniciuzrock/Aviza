import { Router, Request, Response } from "express"
import ProductController from "../controllers/ProductController"
const router = Router()

router.get("/products", ProductController.getProducts)

export default router
