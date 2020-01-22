const express=require('express')
const {AuthController}= require('../controllers')


const router=express.Router()

router.get('/hashpassword',AuthController.belajarcrypto)
router.post('/register',AuthController.register)
router.get('/login',AuthController.login)
router.get('/sendmail',AuthController.sendmail)
router.post('/registerver',AuthController.registerver)

module.exports=router