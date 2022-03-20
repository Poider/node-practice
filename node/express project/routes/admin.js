const express = require('express');

const router = express.Router();

const rootdir = require('../util/path')
const path = require('path');;

router.use('/products',(req,res,next) => {
	res.sendFile(path.join(rootdir,'views','shop.html'));
})
router.use('/add-products',(req,res,next) => {
	res.sendFile(path.join(rootdir,'views','add-products.html'));
})


module.exports = router;