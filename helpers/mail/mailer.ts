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
export const sendEmailHTML = async (to: string, subject: string, body: string) => {
    const mailOptions = {
        from: 'no-reply@teste.com',//user,
        to,
        subject,
        html: body
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response)
        }
    })
}

