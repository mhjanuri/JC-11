// function pangkat(a,b) {
//     if (b==0) {
//         return 0
//     } else {
//         var output = a
//         for (i = 1; i < b; i++){
//             output*=a
//         }
//         return output
//     }
// }
// console.log(pangkat(10,3))

// var x = setTimeout(waktu, 5000);
// function waktu() {
//     console.log('Halo');
// }

// // clearTimeout(x)
// console.log('Yuk');




// buat function 1 array of number 
function jumlah(array) {
    var output = 0
    for (i = 0; i < array.length; i++) {
        output+=array[i]
    }
    return output
}


console.log(jumlah([1,2,3,4]))


// pr 1 = 1 set array cari Rata-rata
// pr 2 = jumlah dari string ubah ke array
// pr 3 = bikin function pencarian mobil, trus fitur pencarian true kalo ada, false kalo gak ada