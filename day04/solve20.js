// loop segitiga double terbalik
var output = ''
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < i; j++) {
        output += ' '
    }
    for (var k = 10; i < k; k--) {
        output += '*'
    }
    for (var l = 10-1; i < l; l--) {
        output += '*'
    }
    if (i < 10 - 1) {
        output += '\n'
    }
}
console.log(output)