// loop segitiga terbalik
var output = ''
for (var i = 0; i < 5; i++) {
    for (var j = 5; i < j; j--) {
        output += '*'
    }
    if (i < 4) {
        output += '\n'
    }
}
console.log(output)

// loop segitiga 
var output = ''
for (var i = 1; i < 5; i++) {
    for (var j = 0; j <= i; j++) {
        output += '*'
    }
    if (i<4) {
    output += '\n'
    }
}
console.log(output)