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

var listCart = [

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
            printCart(listCart)         
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

const logout=()=>{
    var konfirmLogout = confirm("Anda yakin ingin Log Out?")
    if (konfirmLogout) {
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