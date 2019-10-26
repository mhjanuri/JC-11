// Solusi mas dino
let z = ''
let tinggi = 5
for (a = 0; a < tinggi; a++) {
    for (b = a; b < tinggi - 1; b++) {  // Segitiga siku terbalik
        z += ' '
    }
    for (c = 0; c <= a; c++) {  // Segitiga siku normal
        z += '*'
    }
    for (d = 0; d <= a - 1; d++) {  // Segitiga siku normal
        z += '*'
    }
    if (a < tinggi - 1) {
        z += '\n'
    }
}
console.log(z)



// gaji hitungparkir operator functions
// gaji karyawan gaji(jammasuk,jamkeluar,posisi)



// for(i=0;i<5;i++){
//     if(i==3){
//         continue
//     }
//     console.log(i)
// }



// var numb=5
// for(a=0;a<4;a++){
//     numb=1000
//     for(b=0;b<4;b++){
//         numb=5
//         for(c=0;c<4;c++){
//             numb=10
//         }
//     }
// }
// console.log(numb)


