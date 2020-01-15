const express = require("express");
const app = express();
const BodyParser=require('body-parser')
const port = 2020;

app.use(BodyParser.urlencoded({extended:false}))
app.use(BodyParser.json()) // Client ngirim data ke server

const users=[
    {
        id:1,
        username:'jamal',
        email:'jamal@email.com',
        password:'qwer'
    },
    {
        id:2,
        username:'bobi',
        email:'bobi@email.com',
        password:'1234'
    },
    {
        id:3,
        username:'fahran',
        email:'fakhran@email.com',
        password:'wakwaw'
    }
]

var arrprod=[
    {
        id:1,
        nama:'popok hokage',
        harga:10000,
        description:'siapkan bayi anda jadi hokage'
    },
    {
        id:2,
        nama:'popok ngesot',
        harga:50000,
        description:'dijamin bayi anda ngesot abis'
    },
    {
        id:3,
        nama:'popok yang tertukar',
        harga:125000,
        description:'popok tiada banding'
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Hello World!")
});

app.get("/users", (req, res) => {
    console.log(req.query)
    const {username,password}=req.query
    if (username||password) {
        var newuser=users.filter((val)=>val.username===username && val.password===password)
        if (newuser.length===0) {
            return res.status(404).send('user not found!')
        }
        return res.status(200).send(newuser[0])
    } else {
        return res.status(200).send(users)
    }
});

app.post('/users',(req, res) => {
    console.log(req.body)
    const {username,email}=req.body
    var newuser=users.filter((val)=>val.username===username || val.email===email)
    if (newuser.length) {
        return res.status(500).send({message:'user atau email sudah ada'})
    }

    users.push({...req.body,id:users.length+1})
    res.status(200).send(users)
})

app.get("/products", (req, res) => {
    console.log(req.query)
    const { nama, harga } = req.query
    if (nama) {
        var newuser = arrprod.filter((val) => val.nama === nama)
        if (newuser.length === 0) {
            return res.status(404).send('user not found!')
        }
        return res.status(200).send(newuser)
    } else {
        return res.status(200).send(arrprod)
    }
});

app.put('/edituser/:id',(req,res) => {
    console.log(req.params.id)
    var newuser=users.indexOf()
    return res.status(200).send('berhasil')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});