const express=require('express')
const {userControllers}= require('./../controllers')

const router=express.Router()

router.get('/user', userControllers.getUser)
router.post('/register', userControllers.postUser)
router.put('/edituser/:id', userControllers.editUser)
router.delete('/user/:id', userControllers.deleteUser)

module.exports=router