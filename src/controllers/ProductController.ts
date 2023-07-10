import axios from "axios"
import { Request, Response } from "express"
import { sendEmailHTML } from "../../helpers/mail/mailer"
import fs from 'fs'
import path, { dirname } from "path"
import handlebars from 'handlebars';

interface Product {
    name: string;
    price: number;
    image: string;
}

class ProductController {

    static async getProducts(req: Request, res: Response) {
        try {
            const searchProduct = req.params.prod
            // await axios.get("https://dummyjson.com/products").then((resp) => {
            await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${searchProduct}`).then((resp) => {
                const products = resp.data.results//resp.data.products
                const productsList = []
                for (let x: number = 0; x <= 30; x++) {
                    productsList.push(products[x])
                }
                console.log('Produtos resgatados');
                res.status(200).json(productsList)
            }).catch((e) => {
                res.status(500).json(e)
            })
        } catch (e) {
            console.log(e)
        }
    }

    static async completePurchase(req: Request, res: Response) {
        try {
            const { cartItems, email } = req.body
            console.log('Concluindo pedido...');

            const data: Product[] = cartItems
            data.push(cartItems)
            console.log(data.pop());//REMOVENDO ULTIMO ITEM DA LISTA
            const templateData = {
                products: data.map((product, index) => ({
                    productIndex: index + 1,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                })),
            };

            const currentDirectory = __dirname
            const templatePath = path.resolve(currentDirectory, '../../helpers/mail/template.html')
            const template = fs.readFileSync(templatePath, 'utf8')
            const compiledTemplate = handlebars.compile(template);
            const html = compiledTemplate(templateData)

            await sendEmailHTML(email, "Recebemos o seu pedido!", html).then(() => {
                res.status(200).json({
                    message: 'Email enviado!'
                })
            }).catch((e) => {
                res.status(400).json({
                    message: 'Email não enviado!'
                })
            })
        } catch (error) {
            res.status(500).json({
                message: '[Error Email Controller]:' + error
            })
        }
    }
}

export default ProductController