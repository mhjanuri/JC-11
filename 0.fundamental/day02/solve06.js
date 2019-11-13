let a = new Date()

console.log('\nHari ini tanggal '+ a.getDate() +'-'+ (a.getMonth() + 1) + '-' + a.getFullYear() + '\n')
console.log('Besok tanggal ' + (a.getDate() + 1) + '-' + (a.getMonth() + 1) + '-' + a.getFullYear() + '\n')
console.log('Kemarin tanggal ' + (a.getDate() - 1) + '-' + (a.getMonth() + 1) + '-' + a.getFullYear() + '\n')
