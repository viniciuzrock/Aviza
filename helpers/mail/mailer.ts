import nodemailer from "nodemailer"
import * as fs from "fs";
import * as path from "path";
import handlebars from "handlebars";

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

    return new Promise<void>((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('[Erro no envio de e-mail]: ' + error);
                reject(error);
            } else {
                console.log('Email sent: ' + info.response);
                resolve();
            }
        });
    });
}

