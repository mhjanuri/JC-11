// // loop segitiga terbalik
// var output = ''
// for (var i = 0; i < 5; i++) {
//     for (var j = 5; i < j; j--) {
//         output += '*'
//     }
//     if (i < 5-1) {
//         output += '\n'
//     }
// }
// console.log(output)

// Solusi mas dino
let z = ''
let tinggi = 5
for (a = 0; a < tinggi; a++) {
    for (b = a; b < tinggi; b++) {  // Segitiga siku terbalik
        z += '*'
    }
    if (a < tinggi - 1) {
        z += '\n'
    }
}
console.log(z)
