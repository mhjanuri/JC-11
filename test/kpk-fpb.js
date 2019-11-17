function gcd(a, b) {
    if (a == 0) {
        return b
    }
    if (b == 0) {
        return a
    }
    if (a == b) {
        return a
    }
    if (a > b) {
        return gcd(a - b, b);
    }
    return gcd(a, b - a);
}

// function gcd(x,y) {
//     while (y) {
//         var t = y;
//         y = x % y;
//         x = t;
//     }
//     return x;
// }
    
var a = 2
var b = 3
console.log("FPB of " + a + " and " + b + " is " + gcd(a, b))



