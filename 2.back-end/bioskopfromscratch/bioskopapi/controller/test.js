const { mysqldb } = require('../connection')
const cryptogenerate = require('./../helper/encrypt')
const transporter = require('./../helper/mailer')

module.exports = {
    registerUser: (req, res) => {
        var { username, email, password } = req.body
        var sql = `SELECT username FROM users WHERE username='${username}'`
        mysqldb.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send({ status: 'errorregist', message: "ada salah di query select mail Registerver", errorregist: err.message })
            }
            if (results.length > 0) {
                return res.status(200).send({
                    status: 'errorregist',
                    message: 'Account has been taken'
                })
            } else {
                var hashpassword = cryptogenerate(password)
                var dataUser = {
                    username,
                    password: hashpassword,
                    email,
                    status: 'unverified',

                }
                sql = `INSERT INTO users SET ?`
                mysqldb.query(sql, dataUser, (err1, res1) => {
                    if (err1) {
                        return res.status(500).send({ status: 'errorregist', message: "ada salah di query elect Register", errorregist: err1.message })
                    }

                    var LinkVerifikasi = `http://localhost:3000/verified?email=${email}&password=${hashpassword}`
                    var mailoptions = {
                        from: 'Koleksen <arissurya28@gmail.com>',
                        to: email,
                        subject: `verifikasi email anda di koleksen`,
                        html: `klik link ini untuk verifikasi :
                                <a href=${LinkVerifikasi}>Join to Koleksen</a>`
                    }
                    transporter.sendMail(mailoptions, (err2, res2) => {
                        if (err2) {
                            console.log(err2)
                            return res.status(500).send({ status: 'errorregist', err: err2 })
                        }
                        console.log(`success regist user`)
                        return res.status(200).send({ username, email, status: 'unverified' })
                    })
                })
            }
        })
    },
    emailVerifikasi: (req, res) => {
        var { email, password } = req.body
        var sql = `SELECT * FROM users WHERE email='${email}'`
        mysqldb.query(sql, (err, results) => {
            if (err) return res.status(500).send({ status: 'error', err })

            if (results.length === 0) {
                return res.status(500).send({ status: 'error', err1: 'user not found' })
            }
            sql = `UPDATE users SET status='verified' WHERE email='${email}' AND password='${password}'`
            mysqldb.query(sql, (err, results2) => {
                if (err) {
                    return res.status(500).send({ status: 'error', err })
                }
                return res.status(200).send({
                    email: results[0].email,
                    status: 'verified'
                })
            })
        })
    }
}