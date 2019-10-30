function hoursCyclingToLitresDrank(hours) {
    var litres = Math.floor(hours * 0.5)
    return litres
}
var jam = 11.8
console.log('time = ' + jam + ' ---> litres = '+hoursCyclingToLitresDrank(jam))