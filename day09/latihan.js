// function angka(a) {
//     console.log(a[0]*Math.pow(10,a.length-1)+'+')    
//     console.log
    
    
    
    
    
    
    // var output
    // for (i=0;i<(a.length)-1-i;i++) {

    // }
    // return output
// }


function angka(a) {
    var str=String(a).split('')
    var output
    for (i=0;i<str.length;i++){
        str[i]=parseInt(str[i])
        output+=str[i]*Math.pow(10,str.length-1-i)+'+'
    }
    return output
}
console.log(angka(2753))