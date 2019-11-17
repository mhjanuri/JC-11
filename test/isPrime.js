function isPrime(num) {
    if (num <= 1) {
        return true
    } else if (num <= 3) {
        return true
    } else if (num % 2 === 0 || num % 3 === 0) {
        return false
    }

    let i = 5
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false
        }
        i += 6
    }
    return true
}

console.log(isPrime(31))

function isPrime1(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

console.log(isPrime1(31))