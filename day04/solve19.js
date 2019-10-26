// loop segitiga double
var output = ''
for (var i = 0; i < 10; i++) {
    for (var j = 10-1; i < j; j--) {
        output += ' '
    }
    for (var k = 0; k < i; k++){
        output += '*'
    }
    for (var l = 0; l <= i; l++) {
        output += '*'
    }
    if (i < 10 - 1) {
        output += '\n'
    }
}
console.log(output)