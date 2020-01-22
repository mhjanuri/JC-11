const express=require('express')
const app=express()
const BodyParser=require('body-parser');
const cors=require('cors') // menghubungkan backend dan front end


app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(cors())
app.use(express.static('public'))
const PORT = 5500

app.get('/',(req,res)=>{
    return res.status(200).send('<h1>Selamat datang di api ini</h1>')
})

const {userRouters}=require('./routers')

app.use('/users', userRouters);


app.listen(PORT,()=>console.log(`aktif di port ${PORT}`))
