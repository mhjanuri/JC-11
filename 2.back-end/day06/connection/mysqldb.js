const mysql=require('mysql')

const db=mysql.createConnection({
    // host:'db4free.net',
    // user:'hendrijanuri',
    // password:'4aG5DA!WWKwwDDK',
    // database:'testdbbioskop',
    // port:'3306'

    host: 'localhost',
    user: 'root',
    password: '!Anakharam123',
    database: 'day07',
    port: '3306'
})


module.exports=db
