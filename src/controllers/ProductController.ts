import { Request, Response } from "express"

class ProductController {

    static async getProducts(req: Request, res: Response) {
        return res.status(200).json({
            message: "Products Listsss",
        })
    }
}

export default ProductController