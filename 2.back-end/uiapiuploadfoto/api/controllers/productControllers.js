const {db} = require('./../connections');

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

}