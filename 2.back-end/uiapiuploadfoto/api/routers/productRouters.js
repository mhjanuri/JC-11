const express = require('express');
const router = express.Router();
const { productControllers } = require('../controllers');

router.post('/postprod', productControllers.postProduct)

module.exports=router