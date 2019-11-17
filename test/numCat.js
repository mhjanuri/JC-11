function bilangan(a) {
    var arr = []
    if (a!==isNaN) {
        arr.push('bulat')
        if (a > 0) {
            arr.push('cacah')
            if (a !== 0) {
                arr.push('asli')
                if (a % 2 == 0) {
                    arr.push('genap')
                } else {
                    arr.push('ganjil')
                }
                if (isPrime(a)) {
                    arr.push('prima')
                } else {
                    arr.push('komposit')
                }
                function isPrime(num) {
                    for (var i = 2; i < num; i++)
                        if (num % i === 0) return false;
                    return num > 1;
                }
            } else {
                arr.push('nol')
            }
        } else {
            arr.push('negatif')
        }
        return arr
    } else {
        return "Bukan Angka"
    }
}

console.log(bilangan(13))
