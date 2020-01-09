var timers = require('timers')
var assert = require('assert')




var minum = {
    kopi:['luwak','hitam','susu']
}

try {
    assert.equal(minum.kopi.length,3)
} catch (error) {
    console.log('masuk catch')
    throw error
}