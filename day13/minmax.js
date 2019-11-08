// solusi mas dino
const minMax=(arr=[],cond)=>{
    arr.sort((a,b)=>a-b)
    if (cond=='min') {
        return arr[0]
    } else {
        return arr[arr.length-1]
    }
}
console.log(minMax([40, 100, 1, 5, 25, 10],'min'))