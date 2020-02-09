// try {
//     console.loog('ini benar')
// } catch (error) {
//     console.log(error)
//     if (error) throw error
// }

// console.log('pass ')

// var bisa = 'genap'

// var fakhran=[0,]

// console.log({
    
// })
// fakhran[1].dzaky()['idham'][0]()[1](false)[bisa] //tika

//  SOAL NOMOR 3
const bubbleSort = arr => {
    let swap;
    do {
        swap = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swap = true;
            }
        }
    } while (swap);
    return arr;
};
var array = [2, 3, 1, 5, 0] // DIISI PAKE NUMBER YANG ADA DI SOAL
console.log(bubbleSort(array)); // Hasilnya: [0,1,2,3,4,5]