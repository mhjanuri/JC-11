const nodemailer=require('nodemailer')

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'aldinorahman36@gmail.com',
        pass:'rlwipfcydfeltpkv'
    },
    tls:{
        rejectUnauthorized:false
    }
})

module.exports=transporter