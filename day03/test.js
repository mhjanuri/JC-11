// var job = 'guru'

// switch (job) {
//     case 'guru':
//         console.log('Kerjaannya ngajar.')
//         break
//     case 'sopir':
//         console.log('Kerjaannya nyetir.')
//         break
//     case 'polisi':
//         console.log('Kerjaannya nilang.')
//         break
//     default:
//         console.log('Ada aja kerjaannya.')
// }

// let alaskaki = 'sepatu';
// let warna = 'merah';

// switch (true) {
//     case (alaskaki == 'sepatu' && warna == 'merah'):
//         console.log('Saya suka sepatu merah.')
//         break
//     case (alaskaki == 'sepatu' && warna == 'biru'):
//         console.log('Saya suka sepatu biru.')
//         break
//     case (alaskaki == 'sandal' && warna == 'merah'):
//         console.log('Saya suka sandal merah.')
//         break
//     case (alaskaki == 'sandal' && warna == 'biru'):
//         console.log('Saya suka sandal biru.')
//         break
//     default:
//         console.log('Tak suka alas kaki merah/biru.')
// }

var masuk=3
var keluar=2
var durasi=keluar-masuk
console.log(durasi)
if(durasi<0){
    durasi+=12
}
console.log(durasi)

if (durasi > 1) {
    console.log('durasi if positif= ' + durasi)
    let biaya = (3000 + ((durasi - 1) * 1000))
    alert('Lama parkir anda= ' + durasi + ' jam, biaya parkir anda= Rp ' + biaya + ',00')
    console.log('Lama parkir anda= ' + durasi + ' jam, biaya parkir anda= Rp ' + biaya + ',00')
} else if (durasi == 0 && ampmMasuk == 1 && ampmKeluar == 2) {
    durasi += 12
    console.log('durasi if lewat 12 jam= ' + durasi)
    let biaya = (3000 + ((durasi - 1) * 1000))
    alert('Lama parkir anda= ' + durasi + ' jam, biaya parkir anda= Rp ' + biaya + ',00')
    console.log('Lama parkir anda= ' + durasi + ' jam, biaya parkir anda= Rp ' + biaya + ',00')
} else if (durasi > 0 && ampmMasuk == 1 && ampmKeluar == 2) {
    durasi += 12
    console.log('durasi if lewat 12 jam= ' + durasi)
    let biaya = (3000 + ((durasi - 1) * 1000))
    alert('Lama parkir anda= ' + durasi + ' jam, biaya parkir anda= Rp ' + biaya + ',00')
    console.log('Lama parkir anda= ' + durasi + ' jam, biaya parkir anda= Rp ' + biaya + ',00')
} else if (durasi < 0) {
    durasi += 12
    console.log('durasi if negatif= ' + durasi)
    let biaya = (3000 + ((durasi - 1) * 1000))
    alert('Lama parkir anda= ' + durasi + ' jam, biaya parkir anda= Rp ' + biaya + ',00')
    console.log('Lama parkir anda= ' + durasi + ' jam, biaya parkir anda= Rp ' + biaya + ',00')
} else {
    console.log('durasi if null= ' + durasi)
    let biaya = (3000)
    alert('Lama parkir anda= ' + durasi + ' jam, biaya parkir anda= Rp ' + biaya + ',00')
    console.log('Lama parkir anda= ' + durasi + ' jam, biaya parkir anda= Rp ' + biaya + ',00')
}