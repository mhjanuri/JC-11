function hoursCyclingToLitresDrank(hours) {
    var litres = hours * 0.5
    litres = Math.floor(litres)
    return litres
}
var jam = 11.8
console.log('time = ' + jam + ' ---> litres = '+hoursCyclingToLitresDrank(jam))