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

let alaskaki = 'sepatu';
let warna = 'merah';

switch (true) {
    case (alaskaki == 'sepatu' && warna == 'merah'):
        console.log('Saya suka sepatu merah.')
        break
    case (alaskaki == 'sepatu' && warna == 'biru'):
        console.log('Saya suka sepatu biru.')
        break
    case (alaskaki == 'sandal' && warna == 'merah'):
        console.log('Saya suka sandal merah.')
        break
    case (alaskaki == 'sandal' && warna == 'biru'):
        console.log('Saya suka sandal biru.')
        break
    default:
        console.log('Tak suka alas kaki merah/biru.')
}