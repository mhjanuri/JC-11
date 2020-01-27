const express = require('express')
const { chatController } = require('./../controllers')

const router = express.Router()

router.get('/getmessage', chatController.getMessage)
router.post('/sendmessage', chatController.sendMessage)
router.delete('/clearmessage', chatController.clearMessage)

module.exports = router