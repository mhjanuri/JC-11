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

function atas(tinggi) {
    let output = ''
    for (i = 0; i < tinggi; i++) {
        for (j = 0; j <= i; j++) {  // Segitiga siku normal
            output += '* '
        }
        if (i < tinggi) {
            output += '\n'
        }
    }
    return output
}

function bawah(tinggi) {
    let output = ''
    for (i = 0; i < tinggi; i++) {
        for (j = 0; j <= i; j++) {  // Segitiga siku normal
            output += '* '
        }
        if (i < tinggi - 1) {
            output += '\n'
        }
    }
    return output
}

console.log(atas(6)+bawah(6))