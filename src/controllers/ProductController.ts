import axios from "axios"
import { Request, Response } from "express"

class ProductController {

    static async getProducts(req: Request, res: Response) {

        try {
            await axios.get("https://dummyjson.com/products").then((resp) => {

                const products = resp.data.products
                const productsList = []
                for (let x: number = 0; x <= 3; x++) {
                    productsList.push(products[x])
                }
                res.json(productsList)
            }).catch((e) => {
                res.json(e)
            })
        } catch (e) {
            console.log(e)
        }







        // .then((resp)=> resp.json())

        // then((resp) => resp.json()).then((data)=>{


        // then((resp) => {
        //     res.send(data)
        // }).catch((e) => {
        //     console.log(`Erro: ${e}`);

        // })



        // return res.status(200).json({
        //     // message: "Products Listsss",
        //     products: products
        // })
    }
}

export default ProductController