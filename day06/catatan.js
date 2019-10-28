// // buat function yang menerima 1 parameter 
// function hitung(number) {
//     var output = ''
//     for (i = 0; i < number; i++) {
//         output += (i+1)
//         output += ' '
//     }
//     return output
// }

// console.log(hitung(10))

// function urutan(number) {
//     var output = ''
//     for (i = 0; i < number; i++) {
//         if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {
//             output += 'PurwaDhika'
//         } else if ((i + 1) % 3 == 0) {
//             output += 'Purwa'
//         } else if ((i + 1) % 5 == 0) {
//             output += 'Dhika'
//         } else {
//             output += (i+1) + ' '
//         }
//     }
//     return output
// }

// console.log(urutan(100))

// 
// var Permen = function (hari) {
//     let output = 0
//     for (i = 1; i <= hari; i++) {
//         if (i % 10 == 0) {
//             output += 2
//         } else if (i % 2 == 0) {
//             output -= -1
//         }
//     }
//     return output
// }

// console.log(Permen(100))

//
function hitung(angka,batas) {
    var output = ''
    for (i = 1; i <= batas; i++) {
        output += angka+'x'+i+'='+(angka*i)
        output += ' \n'
    }
    return output
}

console.log(hitung(10,20))