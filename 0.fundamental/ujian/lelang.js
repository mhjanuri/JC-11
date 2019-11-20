const lelang = (a) => {
    var harga = 10000
    var menit = 1
    
    while (menit <= a) {
        if (a % 4 == 0) {
            harga = harga + Math.ceil(harga * (10 / 100))
            menit++
        } else {
            harga = harga + Math.ceil(harga * (20 / 100))
            menit++
        }
    }
    console.log(harga)
    if (harga > 30000000) {
        return 'menit ke ' + a + ' barang sudah terjual'
    } else {
        return 'menit ke ' + a + ' hasilnya ' + harga
    }
}

// const LelangZayn = (waktu) => {

//     HargaAwal = 10000
//     for (i = 1; i <= waktu; i++) {
//         if (i % 4 == 0) {
//             HargaAwal = HargaAwal + Math.ceil(HargaAwal * (10 / 100))
//         }
//         else {
//             HargaAwal = HargaAwal + Math.ceil(HargaAwal * (20 / 100))
//         }
//         if (HargaAwal >= 30000000) {
//             return 'menit ke ' + waktu + ' barang sudah terjual'
//         }
//     }
//     return 'menit ke ' + waktu + ' hasilnya ' + HargaAwal
// }


// console.log(LelangZayn(50))
// console.log(lelang(2))
// console.log(lelang(50))
console.log(lelang(49))
