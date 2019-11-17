// function gcd(a, b) {
//     if (a == 0) {
//         return b
//     }
//     if (b == 0) {
//         return a
//     }
//     if (a == b) {
//         return a
//     }
//     if (a > b) {
//         return gcd(a - b, b);
//     }
//     return gcd(a, b - a);
// }

function fpb_kpk(x, y) {
    let a=x
    let b=y

    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    let kpk = (a * b) / x
    // return x;
    console.log("FPB " + a + " & " + b + " = " + x)
    return console.log("KPK " + a + " & " + b + " = " + kpk)
}

console.log(fpb_kpk(2, 3))
// console.log(fpb_kpk(5, 7))
