const express = require('express');

const router = express.Router();

const rootdir = require('../util/path')
const path = require('path');

router.use('/products',(req,res,next) => {
	//res.sendFile(path.join(rootdir,'views','shop.html'));
	res.render('shop', {Title:'Shop'})
})
router.use('/add-products',(req,res,next) => {
	//res.sendFile(path.join(rootdir,'views','add-products.html'));
	res.render('add-product',{Title : 'Add product' ,data : ['book1','book2','book3','book4']})
})


module.exports = router;