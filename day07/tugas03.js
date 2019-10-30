function cari(mobil) {
    var array = ['calya', 'xenia', 'terios', 'avanza']
    if (array.indexOf(mobil)<0) {
        console.log('hasil pencarian anda nihil')
    } else {
        console.log('hasil pencarian anda berhasil, mobil ditemukan')
    }
}

var string='TErios'
var namaMobil=string.toLowerCase()
console.log(cari(namaMobil))