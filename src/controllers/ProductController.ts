import axios from "axios"
import { Request, Response } from "express"
import { sendEmailHTML } from "../../helpers/mail/mailer"

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
    }

    static async sendEmail(req: Request, res: Response) {
        try {
            console.log('Enviando email....');
            sendEmailHTML("victorrochasantos7@gmail.com", "Recebemos o seu pedido!", "<p>Eai vitao</p>")
            res.send('Enviou')

        } catch (error) {
            console.log(error);
        }
    }
}

export default ProductController