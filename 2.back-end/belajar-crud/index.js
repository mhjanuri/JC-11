const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 4000
const front = require('./connections/front')
const db = require("./connections/index")
const {userRouter} = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

// #######################################################

db.connect(err => {
    if (err) throw err
    console.log('MySQL connected...')
})

app.get('/', (req,res)=> res.send(front))

app.use('/users', userRouter)

app.listen(PORT, console.log(`Server running on port ${PORT}`))