import nodemailer from "nodemailer"
const user: string = 'vinir.santoss@gmail.com'
const pass: string = 'jzudejadapwtxmhu'
const port: number = 465

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
export const sendEmailHTML = (to: string, subject: string, body: string) => {
    const mailOptions = {
        from: user,
        to,
        subject,
        html: '<p>eai vitao<p>'//body
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response)
        }
    })
}

