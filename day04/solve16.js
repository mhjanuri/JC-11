// loop segitiga 
var output = ''
for (var i = 0; i < 5; i++) {
    for (var j = 0; j <= i; j++) {
        output += '*'
    }
    if (i < 5-1) {
    output += '\n'
    }
}
console.log(output)