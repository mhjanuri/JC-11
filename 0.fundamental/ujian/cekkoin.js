function cekkoin(koin) {
    var sum = 0
    var sisa = 0
    if (koin % 25 < koin) {
        sum += parseInt(koin / 25);
        sisa = koin % 25;
        koin = sisa;
    }
    if (koin % .1 < koin) {
        sum  += parseInt(koin / 10);
        sisa = koin % 10;
        koin = sisa;
    }
    if (koin % .05 < koin) {
        sum += parseInt(koin / 5);
        sisa = koin % 5;
        koin = sisa;
    }
    sum += parseInt(koin / 1);
    return sum
}

console.log(cekkoin(49))
console.log(cekkoin(31))
console.log(cekkoin(50))

