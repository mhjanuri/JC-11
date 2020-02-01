const {db}=require('./../connection')
const {uploader}=require('./../helper/uploader')
// function untuk looping dbquery, karena async maka harus dibuat promise
const queryAsync = query => new Promise((resolve, reject) => {
    db.query(query, (err, result) => {
      if(err) return reject(err)
      resolve(result)
    })
})

module.exports={
    getmovies:(req,res)=>{
        var sql=`select * from movies`
        db.query(sql,(err,result)=>{
            if (err) res.status(500).send({status:'error',err})
            var arr=[]
            result.forEach(element => {
                arr.push(queryAsync(`select md.id as idmoviesdetail,s.nama as studio,j.jadwal from moviesdetails md join studios s on md.studioid=s.idstudios join jadwal j on  md.jadwalid=j.idjadwal where md.movieid=${element.idmovies}`))
            });
            Promise.all(arr)
            .then(result1=>{
                result1.forEach((element,index)=>{
                    result[index].studiojadwal=element
                    result[index].genre=JSON.parse(result[index].genre)
                })
                sql=`select * from jadwal`
                db.query(sql,(err,result2)=>{
                    if (err) res.status(500).send({status:'error',err})
                    sql=`select * from studios`
                    db.query(sql,(err,studios)=>{
                        if (err) res.status(500).send({status:'error',err})
                        return res.status(200).send({movie:result,jadwal:result2,studios})
                    })
                })
            })
        })
    },
    postMovie:(req,res)=>{
        try {
            console.log('masuk')
            const path = '/movies/images'; //file save path
            const upload = uploader(path, 'MOVIES').fields([{ name: 'image'}]); //uploader(path, 'default prefix')
    
            upload(req, res, (err) => {
                if(err){
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
                // data.image = imagePath;
                const datamovies={
                    title:data.title,
                    sinopsis:data.sinopsis,
                    sutradara:data.sutradara,
                    genre:JSON.stringify(data.genre),
                    durasi:data.durasi,
                    produksi:data.produksi,
                    trailer:data.trailer,
                    image:imagePath
                }
                var sql = 'INSERT INTO movies SET ?';
                db.query(sql, datamovies, (err, results) => {
                    if(err) {
                        console.log(err.message)
                        fs.unlinkSync('./public' + imagePath);
                        return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
                    }
                    var arr=[]
                    var movieid=results.insertId
                    data.studiojadwal.forEach(element => {
                        arr.push(queryAsync(`insert into moviesdetails (movieid,jadwalid,studioid) values (${movieid},${element.jadwalid},${element.studioid}) `))
                    });
                    Promise.all(arr)
                    .then(result2=>{
                        var sql=`select * from movies`
                        db.query(sql,(err,result3)=>{
                            if (err) res.status(500).send({status:'error',err})
                            var arr=[]
                            result3.forEach(element => {
                                arr.push(queryAsync(`select md.id as idmoviesdetail,s.nama as studio,j.jadwal from moviesdetails md join studios s on md.studioid=s.idstudios join jadwal j on  md.jadwalid=j.idjadwal where md.movieid=${element.idmovies}`))
                            });
                            Promise.all(arr)
                            .then(result4=>{
                                result4.forEach((element,index)=>{
                                    result3[index].studiojadwal=element
                                    result3[index].genre=JSON.parse(result3[index].genre)
                                })
                                sql=`select * from jadwal`
                                db.query(sql,(err,jadwal)=>{
                                    if (err) res.status(500).send({status:'error',err})
                                    sql=`select * from studios`
                                    db.query(sql,(err,studios)=>{
                                        if (err) res.status(500).send({status:'error',err})
                                        return res.status(200).send({movie:result3,jadwal:jadwal,studios})
                                    })
                                })
                            })
                        })
                    })
                })    
            })
        } catch(err) {
            return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
        }
    }
}