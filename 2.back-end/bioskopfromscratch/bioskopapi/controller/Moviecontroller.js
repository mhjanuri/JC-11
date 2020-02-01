const {db} =require('./../connection')

module.exports={
    getmovies:(req,res)=>{
        var sql=`select * from movies`
        db.query(sql, (err,result)=>{
            if (err) res.status(500).send({status: 'error', err})
            sql=``
        })
    }
}