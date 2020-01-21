const crypto = require('crypto');
const cryptogenerate=require('../helper/encrypt')

module.exports =  {
    belajarcrypto:(req,res)=>{
        console.log(req,query)
        const secret='Anakharam'
        const hashpassword=crypto.createHmac('sha256',secret).update(req.query.password).digest('hex')
        
        res.send({encrypt:hashpassword, lengthencrypt:hashpassword.length})
    }
}