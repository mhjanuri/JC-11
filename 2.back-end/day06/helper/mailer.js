const nodemailer=require('nodemailer')
const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'hendrijanuri@gmail.com',
        pass: '!Anakharam123'
    },
    tls:{
        rejectUnauthorisezed:false
    }
})

module.exports=transporter