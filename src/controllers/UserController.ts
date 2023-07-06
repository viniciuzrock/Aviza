import { Router, Request, Response } from "express"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../../config/firebase";
import Logger from "../../config/logger";

class UserController {

    static async register(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const auth = getAuth()
            console.log(email, password);
            await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                const user = userCredential.user;
                console.log('Usuário criado!');

                return res.status(201).json({
                    message: 'Usuário criado',
                    data: user
                })

            }).catch((error) => {
                console.log(error);
                return res.status(400).json({
                    message: error.code
                })
            })
        } catch (error) {
            res.status(500).json({
                message: '[Erro Controller]: ' + error
            })
        }
    }

    static async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const auth = getAuth(firebaseApp)
            await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                console.log('Usuário logado!');
                res.status(200).json({
                    data: userCredential.user
                })

            }).catch((e) => {
                Logger.warn('Usuário não autorizado!')
                Logger.error(e)
                res.status(401).json({
                    message: 'Acesso negado, verifique o e-mail e senha.'
                })
            })
        } catch (error) {
            res.status(500).json({
                message: '[Erro Controller]: ' + error
            })
        }
    }
}

export default UserController