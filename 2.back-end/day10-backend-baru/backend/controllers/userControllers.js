const {mysqldb}=require('../connection')
const { uploader } = require('../helper/uploader')

const fs = require('fs')

module.exports = {
    getUser: (req,res)=> {
        mysqldb.query(`select * from users`,(err,result)=>{
            if (err) res.status(500).send(err)
            res.status(200).send({datauser:result})
        })
    },
    postUser: (req, res)=> {
        try {
            const path='/users/images' // file save path
            const upload = uploader(path, 'USERS').fields([{name:'image'}]) //uploader(path, 'default prefix')

            upload(req, res, (err)=>{
                if (err) {
                    return res.status(500).json({ message: 'Upload picture failed !', error: err.message });
                }
                //foto baru telah terupload
                console.log('masuk')
                const { image } = req.files;
                console.log(image)
                const imagePath = image ? path + '/' + image[0].filename : null;
                console.log(imagePath)

                console.log(req.body.data)
                const data = JSON.parse(req.body.data);
                console.log(data)
                data.image = imagePath;

                // data.userId=req.user.userid

                var sql = 'INSERT INTO users SET ?';
                
                mysqldb.query(sql, data, (err, results) => {
                    if(err) {
                        console.log(err.message)
                        fs.unlinkSync('./public' + imagePath);
                        return res.status(500).json({ message: "There's an error on the server. ", error: err.message });
                    }
                    
                    console.log(results);
                    mysqldb.query(`select * from users`, (err, result4) => {
                        if (err) res.status(500).send(err)
                        res.status(200).send({ datauser: result4})
                    })   
                }) 
            })
       } catch (err) {
            return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
       }
    },
    editUser: (req, res)=> {

        var userId=req.params.id;
        var sql = `SELECT * FROM users WHERE id = ${userId}`
        mysqldb.query(sql,(err,results)=>{
            if(err)throw err;
            if (results.length) {
                const path = '/users/images' // file save path
                const upload = uploader(path, 'USERS').fields([{ name: 'image' }]) //uploader(path, 'default prefix')
                upload(req,res,(err)=>{
                    if (err) {
                        return res.status(500).json({message:'upload post picture failed !',error:err.message})
                    }
                    const {image} = req.files
                    const imagePath = image ? path + '/' + image[0].filename : null;
                    const data = JSON.parse(req.body.data);

                    try {
                        if (imagePath) {
                            data.image = imagePath;
                        }
                        sql = `Update users set ? where id = ${userId};`
                        mysqldb.query(sql, data, (err1, results1) => {
                            if (err1) {
                                if (imagePath) {
                                    fs.unlinkSync('./public' + imagePath);
                                }
                                return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err1.message });
                            }
                            if (imagePath) {//hapus foto lama
                                if (results[0].image) {
                                    fs.unlinkSync('./public' + results[0].image);
                                }
                            }
                            mysqldb.query(`select * from users`, (err, result1) => {
                                if (err) res.status(500).send(err)
                                res.status(200).send({ datauser: result1 })
                            })
                        })

                    } catch (err) {
                        console.log(err.message)
                        return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });

                    }
                })
            }
        })   
    },
    deleteUser: (req, res)=> {
        let sql = `select * from users where id=${req.params.id}`
        mysqldb.query(sql, (err, result) => {
            if(err) res.status(500).send.err
            if (result.length) {
                var sql = `delete from users where id=${req.params.id}`
                mysqldb.query(sql, (err,result1)=>{
                    if (err) res.status(500).send(err)
                    if (result[0].image) {
                        fs.unlinkSync('./public' + result[0].image)
                    }
                    mysqldb.query(`select * from users`,(err,result3)=>{
                        if (err) res.status(500).send(err)
                        res.status(200).send({datauser:result3})
                    })
                })
            }else{
                return res.status(500).send({ message: 'nggak ada woy idnya' })
            }
        })      
    }

}


