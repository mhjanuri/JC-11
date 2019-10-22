var a = 485
var tahun = 360
var bulan = 30
var minggu = 7
var hari = 1
var year = Math.floor(a / tahun)
a = a % tahun
var month = Math.floor(a % tahun / bulan)
a = a % bulan
var week = Math.floor(a % bulan / minggu)
a = a % minggu
var day = Math.floor(a % minggu / hari)
a = a % hari
// console.log(a%tahun)
console.log(year)
console.log(month)
console.log(week)
console.log(day)
console.log(year + ' tahun, ' + month + ' bulan, ' + week + ' minggu, ' + day + ' hari')
