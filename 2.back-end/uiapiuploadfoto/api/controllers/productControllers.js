const {db} = require('./../connections');
const {uploader} = require('./../helper/uploader')
const fs=require('fs')

module.exports={
    postProduct:(req,res)=>{
        var sql='INSERT INTO product SET ?' // pake tanda ? biar gak capek ngetiknya
        db.query(sql, req.body, (err, result)=>{
            if (err) return res.status(500).send(err)
            console.log(result)
            sql=`SELECT * FROM product WHERE idproduct=${result.insertId}` // supaya mereturn hasil yg udah di update
            db.query(sql, (err1, result1)=>{
                if (err1) return res.status(500).send(err1)
                console.log(result1[0])
                return res.send(result1[0])
            })
        })
    },
    postTransaksi:(req,res)=>{
        try {
            const path = './transaksi/images'
            const upload = uploader(path, 'TRANS').fields([{ name: 'image' }])

            upload(req,res,(err)=>{
                if (err){
                    return res.status(500).json({ message: 'upload picture failed', error: err.message})
                }
                console.log('lewat')
                const { image } = req.files
                console.log(image)
                const imagePath = image ? path + '/' + image[0].filename : null;
                console.log(imagePath)

                console.log(req.body.data)
                const data= JSON.parse(req.body.data)
                console.log(data)
                data.paymentimg = imagePath
                data.tanggal = new Date()
                data.status = 'onWaitingPay'
                console.log(data)


            })
        } catch (error) {
            console.log(error)
        }
    }

}