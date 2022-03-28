const express = require('express');

const router = express.Router();

const productController = require('../controllers/users');

// const path = require('path');

// router.use((req, res, next) => {
// 	console.log(req.body);
// 	next();
// })


//new routes
router.use('/cart',productController.getCart);
router.use('/orders',productController.getOrders);
router.use('/checkout',productController.getCheckout);
router.use('/index',productController.getIndex);
router.get('/product-details/:productId',productController.getProductDetails);
router.use('/products',productController.getProducts);
router.post('/add-to-cart',productController.getAddtoCart);
module.exports = router;