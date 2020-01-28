const express = require('express')
const app = express()
const BodyParser = require('body-parser')
const cors = require('cors')
const bearerToken = require('express-bearer-token')

const PORT = 2020

app.use(cors())
app.use(bearerToken())
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    return res.status(200).send('<h1>Selamat datang di api ini</h1>')
})

const {Authrouter} = require('./router')
app.use('/user',Authrouter)

const hasspassword = require('./helper/encrypt')
// app.get('/encrypt', (req, res) => {
//     const {password} = req.query
//     var hasilencrypt=hasspassword(password)
//     return res.status(200).send({encrypt:hasilencrypt, passlama:password})
// })

app.listen(PORT, () => console.log(`aktif di port ${PORT}`))
