import { Router, Request, Response } from "express"
import ProductController from "../controllers/ProductController"
const router = Router()

router.get("/products/:prod", ProductController.getProducts)
router.post("/completePurchase", ProductController.completePurchase)
// router.get("/email", ProductController.sendEmail)

export default router
