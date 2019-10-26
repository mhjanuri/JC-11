// // loop segitiga 
// var output = ''
// for (var i = 0; i < 5; i++) {
//     for (var j = 0; j <= i; j++) {
//         output += '*'
//     }
//     if (i < 5-1) {
//     output += '\n'
//     }
// }
// console.log(output)

// Solusi mas dino
let z = ''
let tinggi = 5
for (i = 0; i < tinggi; i++) {
    for (j = 0; j <= i; j++) {  // Segitiga siku normal
        z += '*'
    }
    if (i < tinggi - 1) {
        z += '\n'
    }
}
console.log(z)