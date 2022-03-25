//if theres any controllers logic for users u put it here

//clean names getsmth for get and postsmth for post

const Product = require('../models/product');

exports.getProducts = (req,res,next) => {
	//res.sendFile(path.join(rootdir,'views','shop.html'));
	Product.fetchProducts().then((bdata)=>{res.render('shop/shop', {Title:'Shop',data:bdata,pathy:'/products'})
	})
}

exports.getCart = (req, res, next) => {
	//cartfetch then=>
	res.render('shop/cart', {Title: 'Cart',pathy: 'shop/cart'})
}

exports.getCheckout = (req, res, next) => {
	res.render('shop/checkout', {Title:'Checkout',pathy :'shop/checkout'})
}
exports.getIndex  = (req, res, next) =>{
	res.render('shop/index', {Title: 'Welcome',pathy :'shop/index' })
}
exports.getProductDetails = (req, res, next) =>{
	res.render('shop/product-details', {Title:'Details'})
}

exports.getOrders = (req, res, next) => {
	//cartfetch then=>
	res.render('shop/orders', {Title: 'Orders',pathy: 'shop/orders'})
}