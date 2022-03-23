const express = require('express');

const router = express.Router();

const productController = require('../controllers/products');

// const path = require('path');

// router.use((req, res, next) => {
// 	console.log(req.body);
// 	next();
// })

router.post('/product-added',productController.getProductadded);


module.exports = router;