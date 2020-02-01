const express=require('express')
const {Authcontroller}= require('../controller')
const {auth} = require('./../helper/auth')

const router=express.Router()

router.get('/authlog/:id', Authcontroller.Authlogin)
router.get('/authlog', Authcontroller.Authlogin)
router.post('/register', Authcontroller.register)
router.put('/verified', auth, Authcontroller.verifiedemail)
router.post('/resendemailver', Authcontroller.resendemailver)


module.exports=router