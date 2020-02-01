const express=require('express')
const {Moviecontroller}= require('../controller')
const {auth}=require('./../helper/auth')

const router=express.Router()

router.get('/getmovies',Moviecontroller.getmovies)
router.post('/postmovies',Moviecontroller.postMovie)


module.exports=router