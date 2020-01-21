const express = require('express')
const {AuthController} = require('../controllers')


const router = express.Router()

router.get('/hash', AuthController.belajarcrypto)

module.exports=router