const lelang = (a) => {
    var harga = 10000
    var menit = 0
    
    while (menit < a) {
        if (a % 4 == 0) {
            var discount10 = harga * (10 / 100)
            harga = harga + discount10
            menit++
        } else {
            var discount20 = harga * (20/100)
            harga = harga + discount20
            menit++
            
        }
    }

    if (harga < 30000000) {
        return 'menit ke ' + a + ' hasilnya ' + harga
    } else {
        return 'menit ke ' + a + ' barang sudah terjual'
    }
}
console.log(lelang(2))
console.log(lelang(50))
console.log(lelang(49))

