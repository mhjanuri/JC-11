// Mencari mean dari sekumpulan array
function jumlah(array) {
    var output = 0
    for (i=0;i<array.length;i++) {
        output+=array[i]
    }
    return output
}

function modusPosisiGanjil(array) {
    array=(array.length+1)/2
    return array
}

var arr = [16,24,28,38,41,56,1]   // Array set
console.log(arr)                // Print array set
console.log('sum dari array set: '+arr+' adalah '+jumlah(arr))                 // Sum dari array set
console.log('mean dari array set: '+arr+' adalah '+(jumlah(arr)/arr.length))   // Mean dari array set
var sortedArr=arr.sort()        // Sorting nilai array dari kecil ke besar
if (sortedArr.length%2==1) {
    console.log('median dari array set: '+arr+' adalah '+(sortedArr[(modusPosisiGanjil(arr)-1)])) // median dari sorted array jika jumlah element ganjil
} else {
    console.log('median dari array set: ' + arr + ' adalah '+((sortedArr[((sortedArr.length)/2)-1]+sortedArr[((sortedArr.length)/2)])/2)) // median dari sorted array jika jumlah element genap
}
