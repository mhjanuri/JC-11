const jwt = require('jsonwebtoken');
module.exports = {
    auth: (req, res, next) => {
        if (req.method !== "OPTIONS") {
            jwt.verify(req.token, "puripuriprisoner", (error, decoded) => {
                if (error) {
                    return res.status(401).json({
                        message: "User notauthorized.", error: "User not authorized." });
                }
                console.log(decoded)
                req.user = decoded;
                next();
            });
        } else {
            next();
        }
    }
}