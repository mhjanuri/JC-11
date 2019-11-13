var output = ''
for (var i = 0; i < 5; i++) {
    for (var j = 5; i < j; j--) {
        output += '*'
    }
    if (i < 4) {
        output += '\n'
    }
}
console.log(output)


// BACKUP LATIHAN.HTML
//     < script >
//     alert('selamat datang di website kami')
// do {
//     var konfirmasiutama = true
//     var menuutama = prompt('menu:\n1.Belajar\n2.Belanja\n3.Exit')
//     if (menuutama == 1) {
//         var konfirmasi1 = true
//         while (konfirmasi1) {
//             var menubelajar = prompt('Belajar apa:\n1.Luas Segitiga\n2.Luas Persegi\n3.Volume Balok')
//             if (menubelajar == 1) {
//                 var alassegitiga = parseInt(prompt('Masukkan panjang alas'))
//                 var tinggisegitiga = parseInt(prompt('Masukkan tinggi segitiga'))
//                 alert('luas segitiga adalah ' + (0.5 * alassegitiga * tinggisegitiga))
//             } else if (menubelajar == 2) {
//                 var sisi = parseInt(prompt('Masukkan sisi yang kamu suka '))
//                 alert('luas persegi adalah' + (sisi * sisi) + ' cm^2')
//             } else if (menubelajar == 3) {
//                 var panjang = parseInt(prompt('Masukkan panjang balok'))
//                 var lebar = parseInt(prompt('Masukkan lebar'))
//                 var tinggi = parseInt(prompt('Masukkan tinggi'))
//                 alert('Volume balok adalah ' + (panjang * lebar * tinggi))
//             }
//             konfirmasi1 = confirm('apakah anda ingin belajar lagi? ')
//         }
//     } else if (menuutama == 2) {
//         var konfirmasi2 = true
//         while (konfirmasi2) {
//             var menubelanja = prompt('Belanja apa:\n1.Ayam Rp 10.000,00 per Kg\n2.Sapi Rp 20.000,00 per Kg\n3.Salmon Rp 30.000,00 per Kg')
//             if (menubelanja == 1) {
//                 var ayam = 10000
//                 var beratayam = parseInt(prompt('Beli berapa kilogram daging ayam? '))
//                 alert('Biaya belanja daging ayam sebanyak ' + beratayam + ' Kg, adalah Rp ' + (ayam * beratayam))
//             } else if (menubelanja == 2) {
//                 var sapi = 20000
//                 var beratsapi = parseInt(prompt('Beli berapa kilogram daging sapi? '))
//                 alert('Biaya belanja daging sapi sebanyak ' + beratsapi + ' Kg, adalah Rp ' + (sapi * beratsapi))
//             } else if (menubelanja == 3) {
//                 var salmon = 30000
//                 var beratsalmon = parseInt(prompt('Beli berapa kilogram daging salmon? '))
//                 alert('Biaya belanja daging salmon sebanyak ' + beratsalmon + ' Kg, adalah Rp ' + (salmon * beratsalmon))
//             }
//             konfirmasi2 = confirm('apakah anda ingin berbelanja lagi? ')
//         }
//     } else if (menuutama == 3) {
//         alert('terima kasih telah mengunjungi website kami')
//         console.log('3.exit')
//         break
//     } else if (menuutama == null) {
//         alert('terima kasih telah mengunjungi website kami')
//         console.log('null.cancel button')
//         break
//     }
// } while (true);
// </script >