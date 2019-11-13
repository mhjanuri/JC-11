var string="HELLO"

function lowercase(a) {
    var output=""
    for (i=0;i<a.length;i++) {
        var char = a.charCodeAt(i)
        if (char > 64 && char < 97) {
           output = char += 32
        }
    }
    let lowercase = String.fromCharCode(char)
    output = output.concat(lowercase)
    return output
}
console.log(lowercase(string))