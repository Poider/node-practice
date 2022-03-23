const express = require('express');

const router = express.Router();
const productController = require('../controllers/products');
// const rootdir = require('../util/path')


router.use('/products',productController.getProducts);
router.use('/add-products',productController.getAddproducts);


module.exports = router;