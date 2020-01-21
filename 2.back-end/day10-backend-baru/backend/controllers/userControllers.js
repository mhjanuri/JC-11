const { mysqldb } = require("./../connection");

module.exports={
    getUsers: (req, res) => {
        mysqldb.query(`select u.*,r.nama as rolename from users u left join roles r on u.roleid=r.id order by u.id`, (err, result) => {
            if (err) res.status(500).send(err)
            mysqldb.query('select * from roles', (err, result1) => {
                if (err) res.status(500).send(err)
                res.status(200).send({ datauser: result, datarole: result1 })
            })
        })
    },
}