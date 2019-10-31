function jumlah(array) {
    var array=array.split('')
    var output = 0
    for (i=0;i<array.length;i++) {
        output+=parseInt(array[i])
    }
    return output
}

var string='12345'
console.log('sum dari string set: '+string+' adalah '+jumlah(string))
