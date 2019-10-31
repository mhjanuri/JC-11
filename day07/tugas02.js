function jumlah(array) {
    var output = 0
    for (i=0;i<array.length;i++) {
        output+=parseInt(array[i]) // hilangkan fungsi map di line 12 kalau pake parseInt
    }
    return output
}

var string='12345'

var arr=string.split('')
// .map(Number)
console.log(arr)
console.log('sum dari string set: '+string+' adalah '+jumlah(arr))