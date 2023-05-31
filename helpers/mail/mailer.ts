import nodemailer from "nodemailer"
const user: string = 'vinir.santoss@gmail.com'
const pass: string = 'jzudejadapwtxmhu'
const port: number = 465
var inLineCss = require('nodemailer-juice');

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: port,
    secure: true,
    auth: {
        user,
        pass
    }
})

transporter.use('compile', inLineCss());
export const sendEmailHTML = (to: string, subject: string, body: string) => {
    const mailOptions = {
        from: 'no-reply@teste.com',//user,
        to,
        subject,
        // html: body
        // html: ` <style>div { color:red; }</style><div>Hello world!</div>`
        html: `<!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Namora comigo?</title>
        </head>

        <body>
            <style>
                div {
                    background: #ff7a7a;
                    width: 100%;
                    height: 100%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    padding: 10px;
                    text-align: center;
                    font-family: sans-serif;
                }

                button {
                    background: black;
                    color: white;
                    border: none;
                    padding: 10px;
                    width: 80px;
                    border-radius: 5px;
                }
            </style>
            <div>
                <h2>Aceita namorar comigo?</h2>
                <button class="btn" onclick="sim()">SIM</button>
                <button class="btn" onclick="desvia(this)" onmouseover="desvia(this)">NÃO</button>
            </div>
        </body>

        <script>
            function sim() {
                alert("Você aceitou namorar comigo! :)");
                location.href = "https://music.youtube.com/watch?v=izGwDsrQ1eQ";
            }
            function desvia(btn) {
                btn.style.position = 'absolute';
                btn.style.bottom = geraPosicao(10, 90);
                btn.style.left = geraPosicao(10, 90);
            }
            function geraPosicao(min, max) {
                return (Math.random() * (max - min) + min) + "%";
            }

        </script>

        </html>`
        // html: {
        //     // path: __dirname + "../../src/templates/index.html"
        //     path: __dirname + "../../../public/index.html"
        // },
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response)
        }
    })
}

