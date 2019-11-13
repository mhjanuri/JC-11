// var number=(arr)=>{
//     return arr.map((val,index)=> (index+1)+': '+val)
// }
// console.log(number(['a','b','c']))

// function segitigaSikuKanan(tinggi) {
//     var output = ''
//     for (var i = 0; i < tinggi; i++) {
//         for (var j = i; j < tinggi; j++) {
//             output += ' '
//         }
//         for (var k = 0; k <= i; k++) {
//             output += '*'
//         }
//         if (i < tinggi - 1) {
//             output += '\n'
//         }
//     }
//     return output
// }

// console.log(segitigaSikuKanan(10))

function persegi(tinggi) {
    var output = ''
    for (var i = 0; i < tinggi; i++) {
        for (var j = 0; j < tinggi; j++) {
            output += '* '
        }    
        if (i < tinggi - 1) {
            output += '\n'
        }
    }
    return output
}
console.log(segitigaSamaAtas(5))

function segitigaSamaAtas(tinggi) {
    var output = ''
    for (var i = 0; i < tinggi; i++) {
        for (var j = i; j < tinggi; j++) {
            output += ' '
        }
        for (var k = 0; k <= i; k++) {
            output += '*'
        }
        for (var l = 0; l <= i - 1; l++) {
            output += '*'
        }
        if (i < tinggi - 1) {
            output += '\n'
        }
    }
    return output
}