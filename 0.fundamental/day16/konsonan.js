// function sumArray(array) {
//     array=array.split('')
//     for (i = 0; i < array.length; i++) {
//         if (array[i]) {

//         }
//     }

//     // var output = 0
//     // for (i = 0; i < array.length; i++) {
//     //     output += array[i]
//     // }
//     // return output
// }
// console.log(sumArray('isfan'))

// SOLUSI MAS DINO

const vowelconsonant=(kata)=>{
    var abjad='abcdefghijklmnopqrstuvwxyz'.split('')
    var output=0
    for (var i=0;i<kata.length;i++) {
        if (kata[i]=='a'||kata[i]=='i'||kata[i]=='u'||kata[i]=='e'||kata[i]=='o'){
            output++
        } else {
            var urutan=abjad.indexOf(kata[i])+1
            output+=urutan
        }
    }
    return output
}
console.log(vowelconsonant('azi'))