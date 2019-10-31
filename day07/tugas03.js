var array = ['calya', 'xenia', 'terios', 'avanza']
// function cari(mobil) {
//     mobil=mobil.toLowerCase()
//     if (array.indexOf(mobil)<0) {
//         console.log('hasil pencarian anda nihil')
//         return false
//     } else {
//         console.log('hasil pencarian anda berhasil, mobil ditemukan')
//         return true
//     }
// }

// var string='TErios'
console.log(cari('terios'))
console.log(cari('TeRiOs'))
console.log(cari('jimny'))

// solusi mas dino
function cari(array) {
    for (let i=0;i<array.length;i++) {
        if (array[i].toLowerCase()==array.toLowerCase()) {
            return true
        }
    }
    return false
}