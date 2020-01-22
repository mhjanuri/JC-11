const mysql=require('mysql')

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'!Anakharam123',
    database:'databasebaru',
    port:'3306'
})

module.exports=db