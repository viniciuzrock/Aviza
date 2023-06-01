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

    static async completePurchase(req: Request, res: Response) {
        try {
            //função que irá disparar o e-mail após a conclusão do carrinho
            //quando completar a venda, criar uma arquivo html com o fs
            //colocar os dados da compra nele, entao enviar o email
            const { image, name, price } = req.body
            const templateTeste = `
                <style>
                    img {
                        width: 300px;
                        height: 300px;
                        font-family: sans-serif;
                    }
                </style>

                <h1>Obrigado pela compra!</h1>
                <p>Detalhes do pedido: </p>
                <p>Nome: ${name}</p>
                <p>Preço: ${price}</p>
                <p>Imagem:
                    <img src="${image}" alt="" />
                </p>
            `

            sendEmailHTML("vinir.santoss@gmail.com", "Recebemos o seu pedido!", templateTeste)
        } catch (error) {
            console.log('[Error Email]:' + error);

        }
    }
}

export default ProductController