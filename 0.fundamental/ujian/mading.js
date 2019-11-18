class User {
    constructor(a, b, c) {
        this.nama = a,
            this.katasandi = b,
            this.role = c
    }
}

class List {
    constructor(a, b, c) {
        this.item = a,
            this.hari = b,
            this.gambar = c
    }
}

var dataUser = [
    new User('admin', '123', 'admin'),
    new User('hendri', '123', 'user')
]

var listdata = [
    new List('Lari', 'Senin', 'https://images-na.ssl-images-amazon.com/images/I/91Mduj3AZOL._SL1500_.jpg'),
    new List('Estafet', 'Selasa', 'https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/327355-pringles-original-40g.jpg')
]

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
            document.getElementById("body").innerHTML = `
                    <tbody>

                    </tbody>`
            document.getElementById("foot").innerHTML = `
                    <tfoot>
                        <tr>
                            <td></td>
                            <td><input type="text" class="additem"/></td>
                            <td>
                                <select class="additem">
                                    <option> Senin</option>
                                    <option> Selasa</option>
                                    <option> Rabu</option>
                                    <option> Kamis</option>
                                    <option> Jumat</option>
                                </select>
                            </td>
                            <td><input type="text" class="additem"></td>
                            <td><button onclick="onAddItemClick()">add todo</button></td>
                        </tr>
                    </tfoot>
                </table>
            `
            document.getElementsByTagName("h3")[0].innerHTML = `${dataUserLogin.role}`
            document.getElementsByTagName("p")[0].innerHTML = `<button onclick="logout()">Logout</button>`

            printData(listdata)
            
        } else {
            document.getElementById("body").innerHTML = `
                    <tbody>

                    </tbody>
                `
            document.getElementsByTagName("h3")[0].innerHTML = `${dataUserLogin.nama}`
            document.getElementsByTagName("p")[0].innerHTML = `<button onclick="logout()">Logout</button>`

            printItem(listdata)

        }
    } else {
        document.getElementsByTagName('h3')[0].innerHTML = `User tidak ditemukan atau Password salah`
    }
}

const printItem = (a) => {
    var output = ''
    a.forEach((val, index) => {
        output += `<tr>
            <td>${index + 1}</td>
            <td>${val.item}</td>
            <td>${val.hari}</td>
            <td> <img src=${val.gambar} height='100px'/> </td>
            <td> </td>
        </tr>`

    });
    document.getElementsByTagName('tbody')[0].innerHTML = output
}

var indexedit = -1
var inddexdel = -2
const printData = (a) => {
    var output = ''
    a.forEach((val, index) => {
        if (index == indexedit) {
            output += `<tr>
                            <td>${index + 1}</td>
                            <td><input type="text" id="edititem${index}"></td>
                            <td>
                                <select id="edithari${index}">
                                    <option> Senin</option>
                                    <option> Selasa</option>
                                    <option> Rabu</option>
                                    <option> Kamis</option>
                                    <option> Jumat</option>
                                </select>    
                            </td>                            <td><input type="text" id="editimg${index}"></td>
                            <td><button onclick="cancel()">cancel</button><button onclick="save(${index})">save</button></td>
                        </tr>`
        } else if (index == inddexdel) {
            output += `<tr>
                            <td>${index + 1}</td>
                            <td>${val.item}</td>
                            <td>${val.hari}</td>
                            <td><img src=${val.gambar} height='100px'/></td>
                            <td><button onclick="cancelDel()">No</button><button onclick="confirmDel(${index})">Yes</button></td>
                        </tr>`
        } else {
            output += `<tr>
                            <td>${index + 1}</td>
                            <td>${val.item}</td>
                            <td>${val.hari}</td>
                            <td><img src=${val.gambar} height='100px'/></td>
                            <td><button onclick="hapus(${index})">delete</button><button onclick="edit(${index})">edit</button></td>
                        </tr>`

        }
    });
    document.getElementsByTagName('tbody')[0].innerHTML = output
}

const hapus = (bebas) => {
    inddexdel = bebas
    printData(listdata)
}
const cancelDel = () => {
    inddexdel = -2
    printData(listdata)
}
const confirmDel = (bebas) => {
    listdata.splice(bebas, 1)
    inddexdel = -1
    printData(listdata)
}
const edit = (bebas) => {
    indexedit = bebas
    printData(listdata)
}

const cancel = () => {
    indexedit = -1
    printData(listdata)
}

const save = (bebas) => {
    var newitem = document.getElementById(`edititem${bebas}`).value
    var newhari = document.getElementById(`edithari${bebas}`).value
    var newimg = document.getElementById(`editimg${bebas}`).value
    if (newitem) {
        listdata[bebas].item = newitem
    }
    if (newhari !== listdata[bebas].hari) {
        listdata[bebas].hari = newhari
    }
    if (newimg) {
        listdata[bebas].gambar = newimg
    }
    indexedit = -1
    printData(listdata)
}

const onAddItemClick = () => {
    var input = document.getElementsByClassName('additem')
    var itembaru = input[0].value
    var haribaru = input[1].value
    var imagebaru = input[2].value
    listdata.push(new List(itembaru, haribaru, imagebaru))
    printData(listdata)
}

const logout = () => {
    var konfirmLogout = confirm("Anda yakin ingin Logout?")
    if (konfirmLogout) {
        document.getElementById("body").innerHTML = ``
        document.getElementById("foot").innerHTML = ``
        document.getElementsByTagName("h3")[0].innerHTML = ``
        document.getElementsByTagName("p")[0].innerHTML = ``

    }
}
