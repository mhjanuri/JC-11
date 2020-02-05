const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bearerToken = require('express-bearer-token')
const app = express();

const {db} = require('./connections/index');
const PORT = process.env.PORT || 2020;

// ROUTER
const {productRouters} = require('./routers')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //
app.use(express.static('public')); // buat nyimpan foto

// ngecek connect ke mysql apa gak? 
db.connect(err => {
    if (err) throw err;
    console.log('MySql connected...');
});

// ####################################################################################

app.get('/', (req, res) => res.send(
    `<h1>Hello from the server siiiiiiiiiiiide!</h1> 
    <img src="https://pbs.twimg.com/profile_images/657199367556866048/EBEIl2ol.jpg" />`
))

app.use('/product', productRouters)

app.listen(PORT, console.log(`Server running on port : ${PORT}`));