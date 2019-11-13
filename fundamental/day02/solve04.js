var a = 485
var year = Math.floor(a / 360)
a = a % 360
var month = Math.floor(a % 360 / 30)
a = a % 30
var week = Math.floor(a % 30 / 7)
a = a % 7
var day = Math.floor(a % 7 / 1)
a = a % 1

console.log(year + ' tahun, ' + month + ' bulan, ' + week + ' minggu, ' + day + ' hari')
