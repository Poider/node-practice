const express = require('express');

const path = require('path');

const router = express.Router();

const errorController = require('../controllers/error');

router.get('/',errorController.routeRedirect);

// router.use('/error',(req, res, next)=>{
// 	res.send(`<h1>Error 404</h1>`)
// })

// router.use(productController.body_print)
router.use(errorController.getError)

module.exports = router;