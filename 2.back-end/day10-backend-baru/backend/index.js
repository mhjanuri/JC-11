const express = require('express')
const app = express()
const BodyParser=require('body-parser')

const mysql = require('mysql')

app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());

const PORT = 2000

const {userRouters}=require('./routers')

app.get('/',(req,res)=>{
    return res.status(500).send('<h1> CUKKKKK </h1>')
})

app.use("/user", userRouters);

app.listen(PORT, () => console.log(`aktif di port ${PORT}`));