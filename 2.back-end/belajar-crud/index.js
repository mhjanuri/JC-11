const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

const db = require("./connections/index")
db.connect(err => {
    if (err) throw err
    console.log('MySQL connected...')
})


app.get('/', (req,res)=> res.send(
    `<h1>Hello from the backend siiiiiiiiiiiiiide!</h1> 
    <img src="https://pbs.twimg.com/profile_images/657199367556866048/EBEIl2ol.jpg" />`
))

const {userRouter} = require('./routes')
app.use('/users', userRouter)

const PORT = process.env.PORT || 4000
app.listen(PORT, console.log(`Server berjalan di port ${PORT}`))