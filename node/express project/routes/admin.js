const express = require('express');

const router = express.Router();
const productController = require('../controllers/admin-products');


//new routes
router.use('/admin-products',productController.getAdminProducts);
router.use('/edit-products',productController.getEditProduct);
router.post('/product-added',productController.getProductadded) ;


router.use('/add-products',productController.getAddproducts);


module.exports = router;