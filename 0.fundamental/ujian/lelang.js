// const lelang = (a) => {
//     var harga = 10000
//     var menit = 0
    
//     while (menit < a) {
//         if (a % 4 == 0) {
//             var discount10 = Math.ceil(harga * (10 / 100))
//             harga = harga + discount10
//             menit++
//         } else {
//             var discount20 = Math.ceil(harga * (20/100))
//             harga = harga + discount20
//             menit++
//         }
//     }

//     if (harga <= 30000000) {
//         return 'menit ke ' + a + ' hasilnya ' + harga
//     } else {
//         return 'menit ke ' + a + ' barang sudah terjual'
//     }
// }

const LelangZayn = (waktu) => {

    HargaAwal = 10000
    for (i = 1; i <= waktu; i++) {
        if (i % 4 == 0) {
            HargaAwal = HargaAwal + Math.ceil(HargaAwal * (10 / 100))
        }
        else {
            HargaAwal = HargaAwal + Math.ceil(HargaAwal * (20 / 100))
        }
        if (HargaAwal >= 30000000) {
            return 'menit ke ' + waktu + ' barang sudah terjual'
        }
    }
    return 'menit ke ' + waktu + ' hasilnya ' + HargaAwal
}


console.log(LelangZayn(50))
// console.log(lelang(2))
// console.log(lelang(50))
// console.log(lelang(49))
