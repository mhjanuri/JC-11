const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const mysql = require('mysql')

const PORT = 2020;

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'!Anakharam123',
    database:'hokahokabento',
    port:'3306'
})


app.use(BodyParser.urlencoded({extended:false}))
app.use(BodyParser.json())

app.get('/prod',(req,res)=>{
    var sql= `select * from product;`
    db.query(sql,(err,result)=>{
        if (err) res.status(500).send(err)
        console.log(result)
        res.status(200).send(result)
    })
})

app.listen(PORT,()=>console.log(`aktif di port ${PORT}`))