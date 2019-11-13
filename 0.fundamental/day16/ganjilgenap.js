const ganjilgenap=(plat,tanggal)=> {
    var arr=plat.split(' ')
    if (arr[1] % 2 == 0 && tanggal % 2 == 0) {
        return 'anda boleh lewat'
    } else if (arr[1] % 2 !== 0 && tanggal % 2 !== 0) {
        return 'anda boleh lewat'
    } else {
        return 'anda tidak boleh lewat'
    }  
}
console.log(ganjilgenap('B 1234 AR', 22))
console.log(ganjilgenap('B 1234 AR',23))
console.log(ganjilgenap('B 4321 AR', 22))
console.log(ganjilgenap('B 4321 AR', 23))
