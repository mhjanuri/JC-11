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