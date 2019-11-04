// function day9(a) {
//     return [0,function bebas() {
//         return [1,2,3][a]
//     },3]
// }
// console.log(day9(2)[1]())

// function jc11(a) {
//     return [1,2,function(){return a}(),4,5][2]
// }
// console.log(jc11(10))

let buah = ['Jeruk', 'Nanas', 'Apel'];
// buah.pop();
// console.log(buah)
// buah.push('Kiwi');
// console.log(buah)
// buah.shift();
// console.log(buah)
// buah.unshift('Lemon');
// console.log(buah)
buah.splice(2, 0, 'Lemon', 'Kiwi');
console.log(buah)
buah.splice(0, 1);
console.log(buah)
delete buah[1];
console.log(buah)