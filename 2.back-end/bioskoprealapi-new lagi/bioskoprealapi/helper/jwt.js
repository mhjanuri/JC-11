const jwt = require ('jsonwebtoken');

module.exports = {
    createJWTToken(payload){
        return jwt.sign(payload, "puripuriprisoner", { expiresIn : '12h' })
    },
    createJWTTokenemail(payload){
        return jwt.sign(payload, "puripuriprisoner", { expiresIn : '180000' })
    },
}