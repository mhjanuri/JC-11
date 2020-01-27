const express=require('express')
const app=express()
const http = require('http')
const socketIO = require('socket.io')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 1997

app.use(bodyParser.json())
app.use(cors())
const server=http.createServer(app)
const io=socketIO(server)

var arrMsg=[]
var userCount=0

app.io=io
app.arrMsg=arrMsg

app.get('/', (req,res)=>{
    res.status(200).send('<h1>Selamat datang di API Socket.IO</h1>')
})

const { chatRouter } = require('./routers')
app.use('/chat', chatRouter)

io.on('connection', socket => {
    console.log('user connected')
    userCount+=1
    io.emit('user connected', userCount)

    socket.on('disconnect', ()=>{
        console.log('user disconnected')
        userCount-=1
        io.emit('user disconnected', userCount)
    })
})

server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})