const nodemailer=require('nodemailer')

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'hendrijanuri@gmail.com',
        pass:'jwlmvvjrxmihlrcv'
    },
    tls:{
        rejectUnauthorized:false
    }
})

module.exports=transporter