import { Router, Request, Response } from "express"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../../config/firebase";

class UserController {

    static async register(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            // const auth = firebaseAuth.getAuth(firebaseApp)
            const auth = getAuth()
            await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                const user = userCredential.user;
                return res.status(201).json({
                    message: 'Usuário criado',
                    data: user
                })

            }).catch((error) => {
                return res.status(400).json({
                    message: '[Erro FirebaseAuth]: ' + error.message
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
                res.status(200).json({
                    data: userCredential.user
                })

            }).catch((e) => {
                res.status(401).json({
                    message: '[Erro FirebaseAuth]: ' + e.message
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