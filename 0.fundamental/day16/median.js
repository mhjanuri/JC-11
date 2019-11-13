const getmiddle=(array)=>{
    let median
    if (array.length % 2 !== 0) {
        median=array[Math.floor(array.length/2)]
    } else {
        const mid1 = array[(array.length / 2) - 1]
        const mid2 = array[(array.length / 2)]
        median=mid1+mid2
    }
    return median
}

console.log(getmiddle('test'))
console.log(getmiddle('testing'))
console.log(getmiddle('middle'))
console.log(getmiddle('A'))