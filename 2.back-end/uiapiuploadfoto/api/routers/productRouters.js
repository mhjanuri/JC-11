const express = require('express');
const router = express.Router();
const { productControllers } = require('../controllers');

router.get('/gettrans', productControllers.getTransaksi)
router.post('/postprod', productControllers.postProduct)
router.post('/posttrans', productControllers.postTransaksi)


module.exports=router