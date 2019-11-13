function countingValleys(s) {
    let steps = 0
    let currentLevel = 0
    let stepHistory = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'U') {
            currentLevel++
            stepHistory.push(currentLevel)
        } else if (s[i] === 'D') {
            currentLevel--
            stepHistory.push(currentLevel)
        } else if (s[i] === 'F') {
            steps++
        }
    }
    let sumValley = 0
    for (let i = 0; i < stepHistory.length; i++) {
        if (stepHistory[i] === 0 && stepHistory[i - 1] < 0) {
            sumValley++
        }
    }
    return sumValley
}


console.log(countingValleys('UFFDDFDUDFUFUUFFDDUFFDDUDUDUDUDUDUUUUUUUUU'))  // 3
// console.log(countingValleys('DFFU'))  // 1
// console.log(countingValleys('UFFFD'))  // 0