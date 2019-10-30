function cari(mobil) {
    var array = ['calya', 'xenia', 'terios', 'avanza']
    if (array.indexOf(mobil)<0) {
        console.log('hasil pencarian anda nihil')
        return false
    } else {
        console.log('hasil pencarian anda berhasil, mobil ditemukan')
        return true
    }
}

var string='TErios'
var namaMobil=string.toLowerCase()
console.log(cari(namaMobil))