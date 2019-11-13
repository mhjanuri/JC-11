function joinsendiri(a,b) {
    var output = ''
    for (i=0;i<a.length;i++) {
        output+=a[i]
        if (i<(a.length-1)) {
            output+=b             
        }
    }
    return output
}
console.log(joinsendiri(['d','i','n','o'],'*'))

// solusi mas dino
function joinsendiri(a, b) {
    var output = ''
    for (i = 0; i < a.length; i++) {
        if (i < (a.length - 1)) {
            output += a[i]+b
        }else {
            output += a[i]
        }
    }
    return output
}