// var angka = 1
// while(angka<10){
//     console.log(angka)
//     angka++
// }

var angka = 1
var angka2 = 1

while (angka <=4) {
    // while (angka2<3){
    //     console.log('ini'+angka2)
    //     angka2++
    // }
    // console.log(angka)

    if (angka % 2 == 0) {
        console.log(angka + 'masuk angka')
    }
    angka++
    console.log(angka)

    
}

{/* <html>
    <script>
        var masuk = prompt('Jam berapa anda parkir? ')
        masuk=parseInt(masuk)
        var keluar = prompt('Jam berapa anda keluar? ')
        keluar=parseInt(keluar)
        if(keluar<masuk){
            keluar += 12
        }
        var jam=keluar-masuk
        var biaya=jam*1000
        alert('anda parkir selama '+jam+ ' jam biayanya Rp '+biaya+',00')

    </script>
</html> */}