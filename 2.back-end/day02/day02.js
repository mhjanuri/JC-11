// var timers = require('timers')
// var assert = require('assert')




// var minum = {
//     kopi:['luwak','hitam','susu']
// }

// try {
//     assert.equal(minum.kopi.length,3)
// } catch (error) {
//     console.log('masuk catch')
//     throw error
// }


const os = require('os');
var namaCPU = os.hostname(); 
var osTipe = os.type();
var osPlatform = os.platform();
var osRilis = os.release();
var dirAwal = os.homedir();
var ramSisa = os.freemem();
var ramTotal = os.totalmem();

console.log(namaCPU)
console.log(osTipe)
console.log(osPlatform)
console.log(osRilis)
console.log(dirAwal)
console.log(ramSisa)
console.log(ramTotal)
