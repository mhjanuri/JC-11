const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const cors = require('cors') //library untuk menghubungkan backend dan frontend
// connection
const {mysqldb} = require('./connection');

const PORT = 2020;

app.use(cors())
app.use(BodyParser.urlencoded({extended:false}))
app.use(BodyParser.json())

app.get('/', (req, res) => {
    return res.status(200).send('<h1>404 Not Found</h1>')
})

// app.get('/prod',(req,res)=>{
//     var sql= `select * from transaction;`
//     db.query(sql,(err,result)=>{
//         if (err) res.status(500).send(err)
//         console.log(result)
//         res.status(200).send(result)
//     })
// })

app.get('/users',(req,res)=>{
    mysqldb.query('select u.*,r.nama as rolename from users u left join roles r on r.role_id=r.id;',(err,result)=>{
        if(err) res.status(500).send(err)
        mysqldb.query('select * from roles',(err,result1)=>{
            if (err) res.status(500).send(err)
            res.status(200).send({datauser:result,datarole:result1})
        })
    })
})

app.post('/users/:terserah', (req, res) => {
    console.log(req.body)
    console.log(req.params.terserah)
    console.log(req.query)
    // var data={username:'yanto',password:'234',email:'yanto@email.com',phone:'08221333',usia:46}
    let sql = `select * from users where username='${req.body.username}' or email='${req.body.email}'`
    mysqldb.query(sql, (err, result) => {
        if (err) res.status(500).send(err)
        if (result.length) {
            return res.status(500).send({ message: 'user/email has already registered' })
        } else {
            sql = 'insert into users set ?'
            mysqldb.query(sql, { ...req.body, lastlogin: new Date() }, (err1, result1) => {
                if (err1) res.status(500).send(err1)
                sql = `select * from users`
                mysqldb.query(sql, (err2, result2) => {
                    if (err2) res.status(500).send(err2)
                    res.status(200).send(result2)
                })
            })
        }
    })
})

app.delete('/users/:id', (req, res) => {
    console.log(req.params)
    let sql = `select * from users where id=${req.params.id}`
    mysqldb.query(sql, (err, result) => {
        if (err) res.status(500).send(err)
        if (result.length) {
            sql = `delete from users where id=${req.params.id}`
            mysqldb.query(sql, (err, result1) => {
                if (err) res.status(500).send(err)
                sql = `select * from users`
                console.log(result1)
                mysqldb.query(sql, (err, result2) => {
                    if (err) res.status(500).send(err)
                    return res.status(200).send(result2)
                })
            })
        } else {
            return res.status(500).send({ message: 'nggak ada woy idnya' })
        }
    })
})

app.listen(PORT,()=>console.log(`aktif di port ${PORT}`))