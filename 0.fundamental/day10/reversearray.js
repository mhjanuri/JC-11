var array = [1, 2, 3, 4]

// function reverse array
function reverseArray(a) {
    var output = []
    for (i=(a.length-1); i>=0; i--) {
        output.push(a[i])
    }
    return output
}

console.log(reverseArray(array))

// simple function
let reverse = a => [...a].map([].pop, a)
console.log(reverse(array))