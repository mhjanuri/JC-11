const cryptogenerate=require('./../helper/encrypt')
const {mysqldb}=require('./../connection')
const transporter=require('./../helper/mailer')
const fs=require('fs')
const createJWTToken=require('./../helper/jwt')

module.exports={
    belajarcrypto:(req,res)=>{
        console.log(req.query)
        const hashpassword=cryptogenerate(req.query.password)
        // const hashpassword1=crypto.createHmac('sha256','jc11').update(req.query.password).digest('hex')
        // 83aa90211d9d2bb7b133a4772e9a5129f98209847f58b3fca72d8bb33307b74d puripuri
        // 83aa90211d9d2bb7b133a4772e9a5129f98209847f58b3fca72d8bb33307b74d puripuri
        // 8b7de4fbd7e7bf201eada074276ba8a6964a9b963ad0c194ed50920833ee8a53 jc11
        res.send({encryptan:hashpassword,panjangencrypt:hashpassword.length})
    },
    register:(req,res)=>{
        var data=req.body
        
        data.password=cryptogenerate(data.password)
        var sql = 'INSERT INTO users SET ?';
        mysqldb.query(sql,data, (err, results) => {
            if(err) {
                console.log(err.message)
                // fs.unlinkSync('./public' + imagePath);
                return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
            }
           
            console.log(results);
            mysqldb.query(`select u.*,r.nama as rolename from users u left join roles r on u.roleid=r.id order by u.id`,(err,result4)=>{
                if (err) res.status(500).send(err)
                mysqldb.query('select * from roles',(err,result5)=>{
                    if (err) res.status(500).send(err)
                    res.status(200).send({datauser:result4,datarole:result5})
                })
            })   
        })    
    },
    login:(req,res)=>{
        var hashpassword=cryptogenerate(req.query.password)
        var sql=`select * from users where username='${req.query.username}' and password='${hashpassword}'`
        mysqldb.query(sql,(err,result)=>{
            if (err) res.status(500).send(err)
            const token=createJWTToken({userid:result[0].id, username:result[0].username})
            res.send({data:result, token})
        })
    },
    sendmail:(req,res)=>{
        var x=fs.readFileSync('./satu.html','utf8')
        console.log(x)
        // res.send(x)
        var mailoptions={
            from:'terserahlu <hendrijanuri@gmail.com>',
            to:'hendrijanuri@gmail.com',
            subject:`verifikasi Email YYYYYYY`,
            html:x
        }
        transporter.sendMail(mailoptions,(err,result)=>{
            if(err){
                console.log(err)
                return res.status(500).send({message:err})
            }
            console.log(result)
            return res.status(200).send({message:'berhasil kirim',result})
        })
    },
    registerver:(req,res)=>{
        var {username,password,email}=req.body
        var sql=`select username from users where username='${username}'`
        mysqldb.query(sql,(err,results)=>{
            if(err){
                return res.status(500).send({status:'error',err})
            }
            if(results.length>0){
                return res.status(200).send({status:'error',message:'username has been taken'})
            }else{
                var hashpassword=cryptogenerate(password)
                var dataUser={
                    username,
                    password:hashpassword,
                    email,
                    usia:20,
                    status:'unverified',
                    lastlogin:new Date()
                }
                sql=`insert into users set ?`
                mysqldb.query(sql,dataUser,(err1,res1)=>{
                    if(err1){
                        return res.status(500).send({status:'error',err:err1})
                    }
                    var LinkVerifikasi=`http://localhost:3000/verified?username=${username}&password=${hashpassword}`
                    var mailoptions={
                        from:'hokage <hendrijanuri@gmail.com>',
                        to:email,
                        subject:`verifikasi Email app iniitu`,
                        html:`tolong klik link ini untuk verifikasi :
                                <a href=${LinkVerifikasi}>Join apps ini</a>`
                    }
                    transporter.sendMail(mailoptions,(err2,res2)=>{
                        if(err2){
                            console.log(err2)
                            return res.status(500).send({status:'error',err:err2})
                        }
                        console.log(`success`)
                        return res.status(200).send({username,email,status:'unverified'})
                    })
                })
            }
        })
    },
    emailverifikasi:(req,res)=>{
        var {username,password}=req.body
        var sql=`select * from users where username='${username}'`
        mysqldb.query(sql,(err,results)=>{
            if(err) return res.status(500).send({status:'error',err})

            if(results.length===0){
                return res.status(500).send({status:'error',err1:'user not found'})
            }
            sql=`update users set status='verified' where username='${username}' and password='${password}'`
            mysqldb.query(sql,(err,results2)=>{
                if(err){
                    return res.status(500).send({status:'error',err})
                }
                return res.status(200).send({username:results[0].username,email:results[0].email,status:'verified'})
            })
        })
    },
    resendEmailVer:(req,res)=>{
        var {username,email}=req.body
        var sql=`select username,password,email from users where username='${username}' and email='${email}'`
        mysqldb.query(sql,(err,results)=>{
            if(err) return res.status(500).send({status:'error',err})
            if(results.length===0){
                return res.status(500).send({status:'error',err:'user not found'})
            }
            var LinkVerifikasi=`http://localhost:3000/verified?username=${results[0].username}&password=${results[0].password}`
            var mailoptions={
                from:'Raja bajak laut <hendrijanuri@gmail.com>',
                to:results[0].email,
                subject:`verifikasi Email instagrin`,
                html:`tolong klik link ini untuk verifikasi :
                        <a href=${LinkVerifikasi}>Join instagrin</a>`
            }
            transporter.sendMail(mailoptions,(err2,res2)=>{
                if(err2){
                    console.log(err2)
                    return res.status(500).send({status:'error',err:err2})
                }
                console.log(`success`)
                return res.status(200).send({username,email,status:'unverified'})
            })
        })
    },       
}