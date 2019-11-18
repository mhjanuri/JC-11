function cekkoin(koin) {
    var sum = 0
    var sisa = 0
    if (koin % 25 < koin) {
        sum += parseInt(koin / 25);
        sisa = koin % 25;
        koin = sisa;
    }
    if (koin % 10 < koin) {
        sum  += parseInt(koin / 10);
        sisa = koin % 10;
        koin = sisa;
    }
    if (koin % 5 < koin) {
        sum += parseInt(koin / 5);
        sisa = koin % 5;
        koin = sisa;
    }
    sum += parseInt(koin / 1);
    return sum
}

console.log(cekkoin(49)) //7
console.log(cekkoin(31)) //3
console.log(cekkoin(50)) //2

