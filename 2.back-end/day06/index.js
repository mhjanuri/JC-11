const express=require('express')
const app=express()
const BodyParser=require('body-parser')
const cors=require('cors')
const fs=require('fs') //npm ini gunanaya untuk mengbungkan backend dan frontend
const bearerToken=require('express-bearer-token')
// connection
// const {uploader}=require('./helper/uploader')
// const {mysqldb}=require('./connection')
// const fs=require('fs')

const PORT=2020

app.use(cors())
app.use(bearerToken())
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json())
app.use(express.static('public'))

const {
    userRouters,
    AuthRouters
}=require('./routers')

app.get('/',(req,res)=>{
    return res.status(200).send('<h1>Selamat datang di api ini</h1>')
})

app.use('/auth',AuthRouters)
app.use('/user',userRouters)






app.listen(PORT,()=>console.log(`aktif di port ${PORT}`))
// app.get('/prod',(req,res)=>{
//     var sql= `select * from product;`
//     mysqldb.query(sql,(err,result)=>{
//         if (err) res.status(500).send(err)
//         res.status(200).send(result)
//     })
// })

// app.get('/users',(req,res)=>{
//     mysqldb.query(`select u.*,r.nama as rolename from users u left join roles r on u.roleid=r.id order by u.id`,(err,result)=>{
//         if (err) res.status(500).send(err)
//         mysqldb.query('select * from roles',(err,result1)=>{
//             if (err) res.status(500).send(err)
//             res.status(200).send({datauser:result,datarole:result1})
//         })
//     })
// })


// app.put('/users/:id',(req,res)=>{
//     mysqldb.query(`update users set ? where id=${req.params.id}`,req.body,(err,result)=>{
//         if (err) res.status(500).send(err)
//         mysqldb.query(`select u.*,r.nama as rolename from users u left join roles r on u.roleid=r.id`,(err,result1)=>{
//             if (err) res.status(500).send(err)
//             mysqldb.query('select * from roles',(err,result2)=>{
//                 if (err) res.status(500).send(err)
//                 res.status(200).send({datauser:result1,datarole:result2})
//             })
//         })
//     })
// })

// app.post('/postusers',(req,res)=>{
//     try {
//         const path = '/post/images'; //file save path
//         const upload = uploader(path, 'USERS').fields([{ name: 'image'}]); //uploader(path, 'default prefix')

//         upload(req, res, (err) => {
//             if(err){
//                 return res.status(500).json({ message: 'Upload picture failed !', error: err.message });
//             }
//             console.log('masuk')
//             const { image } = req.files;
//             console.log(image)
//             const imagePath = image ? path + '/' + image[0].filename : null;
//             console.log(imagePath)

//             console.log(req.body.data)
//             const data = JSON.parse(req.body.data);
//             console.log(data)
//             data.image = imagePath;
//             // data.userId=req.user.userid

//             var sql = 'INSERT INTO users SET ?';
//             mysqldb.query(sql, data, (err, results) => {
//                 if(err) {
//                     console.log(err.message)
//                     fs.unlinkSync('./public' + imagePath);
//                     return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
//                 }
               
//                 console.log(results);
//                 mysqldb.query(`select u.*,r.nama as rolename from users u left join roles r on u.roleid=r.id order by u.id`,(err,result4)=>{
//                     if (err) res.status(500).send(err)
//                     mysqldb.query('select * from roles',(err,result5)=>{
//                         if (err) res.status(500).send(err)
//                         res.status(200).send({datauser:result4,datarole:result5})
//                     })
//                 })   
//             })    
//         })
//     } catch(err) {
//         return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
//     }
// })

// app.post('/users/:terserah',(req,res)=>{
//     console.log(req.body)
//     console.log(req.params.terserah)
//     console.log(req.query)
//     // var data={username:'yanto',password:'234',email:'yanto@email.com',phone:'08221333',usia:46}
//     let sql=`select * from users where username='${req.body.username}' or email='${req.body.email}'`
//     mysqldb.query(sql,(err,result)=>{
//         if (err) res.status(500).send(err)
//         if(result.length){
//             return res.status(500).send({message:'user/email has already registered'})
//         }else{
//             sql='insert into users set ?'
//             mysqldb.query(sql,{...req.body,lastlogin:new Date()},(err1,result1)=>{
//                 if (err1) res.status(500).send(err1)
//                 sql=`select * from users`
//                 mysqldb.query(sql,(err2,result2)=>{
//                     if (err2) res.status(500).send(err2)
//                     res.status(200).send(result2)
//                 })
//             })
//         }
//     })
// })

// app.delete('/users/:id',(req,res)=>{
//     console.log(req.params)
//     let sql=`select * from users where id=${req.params.id}`
//     mysqldb.query(sql,(err,result)=>{
//         if (err) res.status(500).send(err)
//         if(result.length){
//             sql=`delete from users where id=${req.params.id}`
//             mysqldb.query(sql,(err,result1)=>{
//                 if (err) res.status(500).send(err)
//                 sql=`select * from users`
//                 console.log(result1)
//                 mysqldb.query(sql,(err,result2)=>{
//                     if (err) res.status(500).send(err)
//                     return res.status(200).send(result2)
//                 })
//             })
//         }else{
//             return res.status(500).send({message:'nggak ada woy idnya'})
//         }
//     }) 
// })
