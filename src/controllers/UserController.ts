import { Router, Request, Response } from "express"
import firebaseAuth, { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../../config/firebase";

class UserController {

    static async register(req: Request, res: Response) {
        res.status(200).send({
            message: "User registered"
        })
    }

    static async login(req: Request, res: Response) {
        const auth = getAuth(firebaseApp)
        const { email, password } = req.body
        console.log(email, password);

        // firebaseAuth.signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            res.status(200).json({
                data: userCredential.user
            })

        }).catch((e) => {
            res.status(401).json({
                message: 'Erro Controller ' + e.message
            })
        })
    }
}

export default UserController