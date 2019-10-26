// // loop segitiga double
// var output = ''
// for (var i = 0; i < 10; i++) {
//     for (var j = 10-1; i < j; j--) {
//         output += ' '
//     }
//     for (var k = 0; k < i; k++){
//         output += '*'
//     }
//     for (var l = 0; l <= i; l++) {
//         output += '*'
//     }
//     if (i < 10 - 1) {
//         output += '\n'
//     }
// }
// console.log(output)

// Solusi mas dino
let z = ''
var tinggi = 5
for (i = 0; i < tinggi; i++) {
    for (j = i; j < tinggi - 1; j++) {
        z += ' '
    }
    for (k = 0; k <= i; k++) {
        z += '*'
    }
    for (l = 0; l <= i - 1; l++) {
        z += '*'
    }
    if (i < tinggi - 1) {
        z += '\n'
    }
}
console.log(z)