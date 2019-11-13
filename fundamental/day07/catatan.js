// var fungsiku = function (a,b,c) {
//     return 'ini ' + a
// }
// console.log(fungsiku('budi'))

// var x = setTimeout(waktu, 5000);
// function waktu() {
//     console.log('Halo');
// }

// // clearTimeout(x)
// console.log('Yuk');

// Timer 10 Detik
// var stop = setInterval(waktu, 1000)
// var time=10
// function waktu() {
//     console.log(time)
//     time-=1
//     if (time == 0){
//         clearInterval(stop)
//     }
// }




// buat function faktorial

// function faktorial(a) {
//     var output = a
//     for (i = 0; i < a; i++) {
//             output*=--a
//         }
//         return output
//     }

// console.log(faktorial(4))

// function faktorial(a) {
//     for (i = a - 1; i > 0; i--) {
//         a *= i
//     }
//     return a
// }
// console.log(faktorial(9))


let mobil = ['calya', 'xenia', 'terios','avanza']

// console.log(mobil)
// console.log(mobil.toString())
// console.log(mobil.join('-'))


// console.log(mobil[0])
// console.log(mobil[1])
// console.log(mobil[2])
// console.log(mobil[3])

console.log(mobil.length)

for (i=0;i<mobil.length;i++) {
    console.log(mobil[i])
}

console.log(mobil.sort())
console.log(mobil.reverse())
console.log(mobil.indexOf('brio'))