import axios from "axios"
import { Request, Response } from "express"
import { sendEmailHTML } from "../../helpers/mail/mailer"
import fs from 'fs'
import path, { dirname } from "path"
class ProductController {

    static async getProducts(req: Request, res: Response) {
        try {
            await axios.get("https://dummyjson.com/products").then((resp) => {

                const products = resp.data.products
                const productsList = []
                for (let x: number = 0; x <= 9; x++) {
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

    static async completePurchase(req: Request, res: Response) {
        try {
            //função que irá disparar o e-mail após a conclusão do carrinho
            //quando completar a venda, criar uma arquivo html com o fs
            //colocar os dados da compra nele, entao enviar o email
            const { image, name, price } = req.body
            const currentDirectory = __dirname
            const templatePath = path.resolve(currentDirectory, '../../helpers/mail/template.html')
            const template = fs.readFileSync(templatePath, 'utf8')
            const templateFormat = template.replace('{{name}}', name).replace('{{price}}', price).replace('{{image}}', image)
            await sendEmailHTML("vinir.santoss@gmail.com", "Recebemos o seu pedido!", templateFormat).then(() => {
                console.log('Email enviado')
            }).catch((e) => {
                console.log(e)
            })
        } catch (error) {
            console.log('[Error Email]:' + error);

        }
    }
}

export default ProductController