const db = require('../connections/index')

module.exports = {
    userCreateStore: (req, res) => {
        let {storeName} = req.body

        let data = {
            storeName
        }

        let sql = "INSERT INTO store SET ?"

        db.query(sql, data, (err,result)=>{
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    userGetStore: (req,res)=> {
        let sql = `SELECT * FROM store`

        db.query(sql, (err,result)=> {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    userUpdateStore:(req,res)=> {
        const storeId = req.params.id
        let {storeName} = req.body

        let data = {
            // storeId,
            storeName
        }

        let sql = `UPDATE store SET ? WHERE storeId = ? `

        db.query(sql, [data, storeId], (err, result)=> {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    userDeleteData:(req,res)=> {
        const storeId = req.params.id

        let data = {
            storeId
        }

        let sql = `DELETE FROM store WHERE storeId = ?`

        db.query(sql, [data], (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    userAddProduct: (req, res) => {
        const {storeId, productName, productPrice} = req.body

        let data = {
            storeId,
            productName,
            productPrice
        }

        let sql = `INSERT INTO product SET ?`

        db.query(sql, [data], (err, result)=>{
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
}