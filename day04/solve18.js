// // loop segitiga terbalik
// var output1 = ''
// for (var i = 0; i < 5; i++) {
//     for (var j = 5; i < j; j--) {
//         output1 += '*'
//     }
//     if (i < 5) {
//         output1 += '\n'
//     }
// }
// // loop segitiga 
// var output2 = ''
// for (var i = 1; i < 5; i++) {
//     for (var j = 0; j <= i; j++) {
//         output2 += '*'
//     }
//     if (i<5-1) {
//     output2 += '\n'
//     }
// }
// console.log(output1+output2)

// Solusi mas dino
let z = ''
var tinggi = 5
for (a = 0; a < tinggi; a++) {
    for (b = a; b <= tinggi; b++) {  // Segitiga siku terbalik  // add <= to stop print the last star
        z += '*'
    }
    if (a < tinggi) {
        z += '\n'
    }
}

let x = ''
var tinggi = 5
for (i = 0; i < tinggi; i++) {
    for (j = 0; j <= i; j++) {  // Segitiga siku normal
        x += '*'
    }
    if (i < tinggi - 1) {
        x += '\n'
    }
}

console.log(z+x)