const crypto=require('crypto')

module.exports=(password)=>{
    return crypto.createHmac('sha256','puripuri').update(password).digest('hex')
}
