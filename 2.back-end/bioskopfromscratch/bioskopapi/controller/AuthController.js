const hashpassword=require('./../helper/encrypt')
const {db}=require('./../connection')
const {createJWTToken,createJWTTokenemail}=require('./../helper/jwt')
const transporter=require('./../helper/mailer')
module.exports={
    Authlogin:(req,res)=>{
        const {id}=req.params
        const {username,password}=req.query
        // console.log(req.query)
        if(username&&password){
            // buat login
            var encryptpass=hashpassword(password)
            var sql=`select * from users where username='${username}' and password='${encryptpass}';`
            db.query(sql,(err,results)=>{
                if (err) res.status(500).send({status:'error',err})
                const token=createJWTToken({userid:results[0].id,username:results[0].username})
                // console.log(token)
                return res.status(200).send({result:results,token})
            })
        }else if(id){
            // ini buat keeplogin
            var sql=`select * from users where id=${id}`
            db.query(sql,(err,results)=>{
                if (err) res.status(500).send({status:'error',err})
                const token=createJWTToken({userid:results[0].id,username:results[0].username})
                return res.status(200).send({result:results[0],token})
            })
        }else{
            return res.status(500).send({message:'error bro'})
        }
    },
    register:(req,res)=>{
        const {username,password,email}=req.body
        console.log(req.body)
        var encryptpass=hashpassword(password)
        var sql=`select * from users where username='${username}' and password='${encryptpass}'`
        db.query(sql,(err,results)=>{
            console.log(results.length)
            if (err) res.status(500).send({status:'error',err})
            if(results.length===0){
                sql=`insert into users set ?`
                var data={
                    username,
                    password:hashpassword(password),
                    roleid:1,
                    email,
                    verified:0
                }
                db.query(sql,data,(err,results1)=>{
                    if (err) res.status(500).send({status:'error regist',err})
                    console.log(results1.insertId)
                    sql=`select * from users where id=${results1.insertId}`
                    db.query(sql,(err,results2)=>{
                        if (err) res.status(500).send({status:'error select',err})
                        // email disini
                        const tokenemail=createJWTTokenemail({userid:results2[0].id,username:results2[0].username})

                        var LinkVerifikasi=`http://localhost:3000/verified?token=${tokenemail}`
                        var mailoptions={
                            from:'Kobe Bryant <hendrijanuri@gmail.com>',
                            to:email,
                            subject:`verifikasi Email app bioskop`,
                            html:`tolong klik link ini untuk verifikasi anda sebagai anggota kultus Scientology:
                            <a href=${LinkVerifikasi}>Join Kultus ini</a>`
                        }
                        transporter.sendMail(mailoptions,(err,res2)=>{
                            if(err2){
                                console.log(err2)
                                return res.status(500).send({status:'error',err:err2})
                            }
                            const token=createJWTToken({userid:results2[0].id,username:results2[0].username})
                            //
                            return res.status(200).send({result:results2[0],token})
                        })
                    })
                })  
            }else{
                return res.status(500).send({message:'user sudah ada '})
            }
        })
    },
    verifiedemail:(req,res)=>{
        const {
            userid,
            // username
        }=req.userid
        var sql=`select * from users where id=${userid}`
        db.query(sql, (err,result)=>{
            if (err) res.status(500).send({status:'error select user',err})
            if (result.length===1) {
                sql = `update users set verified=1 where id=${userid}`
                db.query(sql,(err,result1)=>{
                    if (err) res.status(500).send({status:'error update user',err})
                    return res.status(200).send({ message: 'berhasil update', result:result1 })
                })
            } else {
                return res.status(500).send({ status: 'error user lebih dari satu atau nol' })
            }
        })
    },
    resendemailver:(req,res)=>{
        const {
            username,
            email
        }=req.body
        var sql = `select * from users where username='${username}' and email='${email}'`
        db.query(sql, (err, result) => {
            if (err) res.status(500).send({ status: 'error select user', err })
            if (result.length === 1) {
                const tokenemail = createJWTTokenemail({ userid: results2[0].id, username: results2[0].username })

                var LinkVerifikasi = `http://localhost:3000/verified?token=${tokenemail}`
                var mailoptions = {
                    from: 'Kobe Bryant <hendrijanuri@gmail.com>',
                    to: email,
                    subject: `verifikasi Email app bioskop`,
                    html: `tolong klik link ini untuk verifikasi anda sebagai anggota kultus Scientology:
                            <a href=${LinkVerifikasi}>Join Kultus ini</a>`
                }
                transporter.sendMail(mailoptions, (err, res2) => {
                    if (err2) {
                        console.log(err2)
                        return res.status(500).send({ status: 'error', err: err2 })
                    }
                    // const token = createJWTToken({ userid: results2[0].id, username: results2[0].username })
                    console.log('berhasil')
                    return res.status(200).send({ message:'berhasil' })
                })

            } else {
                return res.status(500).send({ status: 'error user lebih dari satu atau nol' })
            }
        })
    }
}