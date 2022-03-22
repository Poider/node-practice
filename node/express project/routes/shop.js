const express = require('express');

const router = express.Router();

const path = require('path');

router.use((req, res, next) => {
	console.log(req.body);
	next();
})

router.post('/product-added',(req, res, next)=>{
	// res.sendFile(path.join(__dirname, '../','views','product-added.html'));
	res.render('product-added',{Title: 'Product Added'})
	//console.log(req.body);
})


module.exports = router;