// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, U , or a downhill, D step. Gary's hikes start and end at sea level and each step up or down represents a 1 unit change in altitude. We define the following terms:
// - A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// - A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.


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
    console.log(stepHistory)
    console.log(steps)
    let stepsAtSeaLevel = 0
    for (let i = 0; i < stepHistory.length; i++) {
        if (stepHistory[i] === 0 && stepHistory[i - 1] < 0) {
            stepsAtSeaLevel++
        }
    }
    return stepsAtSeaLevel
}

console.log(countingValleys('UDDDUDUU'))  // 1
// countingValleys(10, 'UDUUUDUDDD')  // 0
