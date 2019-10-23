var massa = 67
var tinggi = 1.78
// var imt = massa / (Math.pow(tinggi, 2))
var imt = massa / (tinggi**2)
console.log('Massa ' + massa + ' Kg & Tinggi ' + tinggi + ' m ')
if (imt < 18.5) {
    console.log('IMT: ' + imt + ', Berat badan anda KURANG')
}
else if (imt >= 18.5 && imt <= 24.9) {
    console.log('IMT: ' + imt + ', Berat badan anda IDEAL')
}
else if (imt >= 25 && imt <= 29.9) {
    console.log('IMT: ' + imt + ', Berat badan anda BERLEBIH')
}
else if (imt >=30 && imt <= 39.9) {
    console.log('IMT: ' + imt + ', Berat badan anda SANGAT BERLEBIH')
}
else if (imt > 39.9) {
    console.log('IMT: ' + imt + ', Berat badan anda OBESITAS')
}