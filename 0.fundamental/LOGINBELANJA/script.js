class User {
    constructor(a, b, c) {
        this.nama = a,
        this.katasandi = b,
        this.role = c
    }
}

class List {
    constructor(a, b, c) {
        this.produk = a,
            this.harga = b,
            this.gambar = c
    }
}


var dataUser = [
    new User('admin', '123', 'admin'),
    new User('hendri', '123', 'user'),
    new User('123', '123', 'user')
]

var listdata = [
    new List('Cheetos', 4000, 'https://images-na.ssl-images-amazon.com/images/I/91Mduj3AZOL._SL1500_.jpg'),
    new List('Pringles', 10000, 'https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/327355-pringles-original-40g.jpg'),
    new List('Chitato', 5000, 'https://img10.jd.id/Indonesia/s746x746_/nHBfsgAAEwAAABYAEqa5qwABvAM.jpg.webp')
]

var listcart = [

]


const toRegister = () => {
    document.getElementById("container").innerHTML=`
        <h1>Daftar User Shopeepedia</h1>
        <br>
        <br>
        <div id="box">
            <input type="text" id="nama" class="adduser" placeholder="Masukkan Username..."><br>
            <input type="text" id="umur" class="adduser" placeholder="Masukkan Email..."><br>
            Kelamin : <input type="radio" name="sex" value="Pria"> Pria <input type="radio" name="sex"
                value="Wanita"> Wanita 
            <input type="password" id="password" class="adduser" placeholder="Password...">
            <br>
            <input type="submit" onclick="onRegisterUserClick()" value="Submit">
        </div>
        <br>
    `
}

const onRegisterUserClick = () => {
    var input = document.getElementsByClassName("adduser")
    var namauser = input[0].value
    var passworduser = input[2].value
    dataUser.push(new User(namauser, passworduser, 'user'))
    alert("Berhasil register. Kembali ke halaman utama")
    document.getElementById("container").innerHTML = `
            <h1>Selamat datang di Shopeepedia</h1>
            <h4 style="font-style: italic; color: grey;">Best E-Commerce in Indonesia</h4>
            <br>
            <br>
            <div id="box">
                <br>
                Username : <input type="text" id="username" /> <br>
                Password : <input type="password" id="password" /> <br><br>
                <button onclick="toRegister()">Register</button> <button onclick="toLogin()">Login</button><br><br>
            </div>
            <h2></h2>
        `
}

var dataUserLogin = {}

const toLogin = () => {
    var user = document.getElementById('username').value
    var sandi = document.getElementById('password').value
    var login = false 
    for (var i = 0; i < dataUser.length; i++) {
        if (user == dataUser[i].nama && sandi == dataUser[i].katasandi) {
            login = true
            dataUserLogin = dataUser[i]
        }
    }

    if (login) {
        if (dataUserLogin.role == 'admin') {
            
        } else {
            document.getElementById("container").innerHTML = `
                <h1>Selamat Berbelanja, ${dataUserLogin.nama} </h1>
                <button id="logout" onclick="logout()">Logout</button>
                <br>
                <br>
                <table>
                    <thead>
                        <tr>
                            <td>Produk</td>
                            <td>Harga</td>
                            <td>gambar</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
                <br>
                <h1>Keranjang masih kosong</h1>
                <p id="cart"></p>
                <br>
                <table>
                    <thead>

                    </thead>
                    <tbody>

                    </tbody>
                </table>
                <br>
                <div id="divbayar"></div>
                <p id="timer"></p>
            `
            printProduk(listdata)
            printCart(listcart)         
        }
    } else {
        document.getElementsByTagName('h2')[0].innerHTML = `User tidak ditemukan atau Password salah`
    }
}

const printProduk = (a) => {
    var output = ''
    a.forEach((val, index) => {
        output += `<tr>
            <td>${val.produk}</td>
            <td>${val.harga}</td>
            <td> <img src=${val.gambar} height='100px'/> </td>
            <td><button class="addcart" onclick="onAddCartClick(${index})">Add to Cart</button>              
        </tr>`

    });
    document.getElementsByTagName('tbody')[0].innerHTML = output
}

const printCart = (a) => {
    var output = ''
    var jumlah = 0
    var totalcart = 0
    a.forEach((val, index) => {
        output += `<tr>
                        <td>${val.produk}</td>
                        <td>Rp. ${val.harga}</td>
                        <td> <img src=${val.gambar} height='100px'/> </td>
                        <td><button class="delete" onclick="onDeleteClick(${index})">Delete</button>              
                    </tr>`
        jumlah++
        totalcart += val.harga
    });
    document.getElementsByTagName('tbody')[1].innerHTML = output
    if (jumlah !== 0) {
        document.getElementsByTagName('h1')[1].innerHTML = `Item belanja anda ada ${jumlah}`
        document.getElementById('cart').innerHTML = `Total belanja anda sebesar Rp. ${totalcart}`
        document.getElementById('divbayar').innerHTML = `<button onclick="checkout(),start()">Checkout</button>`
    } else {
        document.getElementsByTagName('h1')[1].innerHTML = `Keranjang masih kosong`
        document.getElementById('cart').innerHTML = ``
    }
}

const onAddCartClick = (index) => {
    var addCheck = confirm("Anda yakin mau beli " + listdata[index].produk + "?")
    var head = ''
    if (addCheck) {
        head = `<tr>
                        <td>Produk</td>
                        <td>Harga</td>
                        <td>gambar</td>
                        <td>Action</td>
                    </tr>`
        document.getElementsByTagName('thead')[1].innerHTML = head
        listcart.push(listdata[index])
    }
    printCart(listcart)
}

const onDeleteClick = (index) => {
    var deleteCheck = confirm(`Anda yakin ingin menghapus ${listcart[index].produk}?`)
    if (deleteCheck == true) {
        if (listcart.length == 1) {
            document.getElementsByTagName('thead')[1].innerHTML = ''
            document.getElementById('divbayar').innerHTML = ''
        }
        listcart.splice(index, 1)
    }
    printCart(listcart)
}

function sumArray(array) {
    var output = 0
    for (i = 0; i < array.length; i++) {
        output += array[i]["harga"]
    }
    return output
}

var time = 30
var timer
function start() {
    time = time + 1
    timer = setInterval(waktu, 1000)
}
function waktu() {
    time -= 1
    document.getElementById("timer").innerHTML = `waktu tersisa ${time}`
    if (time < 0) {
        clearInterval(timer)
        alert("Waktu checkout habis...")
        listcart = []
        document.getElementsByTagName('h1')[1].innerHTML = `Keranjang masih kosong`
        document.getElementById('cart').innerHTML = ``
        document.getElementsByTagName('thead')[1].innerHTML = ''
        document.getElementsByTagName('tbody')[1].innerHTML = ''
        document.getElementById('divbayar').innerHTML = ''
        document.getElementById('timer').innerHTML = ''
        time = 30
    }
}
const checkout = () => {
    document.getElementById('divbayar').innerHTML = `<input type="number" id="inputbayar" placeholder="Silakan bayar..."><button onclick="bayar()">Bayar</button>`
}
const bayar = () => {
    if (document.getElementById("inputbayar").value < sumArray(listcart)) {
        alert("Uang anda tidak cukup")
    } else if (document.getElementById("inputbayar").value >= sumArray(listcart)) {
        clearInterval(timer)
        alert("Terima Kasih sudah belanja di toko kami. kembalian anda Rp. " + (document.getElementById("inputbayar").value - sumArray(listcart)))
        listcart = []
        document.getElementsByTagName('h1')[1].innerHTML = `Keranjang masih kosong`
        document.getElementById('cart').innerHTML = ``
        document.getElementsByTagName('thead')[1].innerHTML = ''
        document.getElementsByTagName('tbody')[1].innerHTML = ''
        document.getElementById('divbayar').innerHTML = ''
        document.getElementById('timer').innerHTML = ''
        time = 30
    }
}

const logout=()=>{
    var konfirmLogout = confirm("Anda yakin ingin Log Out?")
    if (konfirmLogout) {
        listcart = []
        timer = 30
        document.getElementById("container").innerHTML = `
                <h1>Selamat datang di Shopeepedia</h1>
                <h4 style="font-style: italic; color: grey;">Best E-Commerce in Indonesia</h4>
                <br>
                <br>
                <div id="box">
                    <br>
                    Username : <input type="text" id="username" /> <br>
                    Password : <input type="password" id="password" /> <br><br>
                    <button onclick="toRegister()">Register</button> <button onclick="toLogin()">Login</button><br><br>
                </div>
                <h2></h2>
            `    
    }
}