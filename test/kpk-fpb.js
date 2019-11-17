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
    return console.log("FPB " + a + " & " + b + " = " + x + "\nKPK " + a + " & " + b + " = " + kpk)
}

console.log(fpb_kpk(2, 3))
// console.log(fpb_kpk(5, 7))
