const express = require('express');

const router = express.Router();
const productController = require('../controllers/admin-products');


//new routes
router.get('/admin-products',productController.getAdminProducts);
// 
router.get('/edit-products/:productId',productController.getEditProduct);
router.post('/product-added',productController.getProductadded) ;


router.use('/add-products',productController.getAddproducts);

router.post('/product-editted',productController.getProductEditted);
router.post('/delete-product',productController.getDeleteProduct);

router.get('/product-deleted',productController.getProductDeleted);
module.exports = router;