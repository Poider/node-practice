//if theres any controllers logic for users u put it here

//clean names getsmth for get and postsmth for post

const Product = require('../models/product');
const rootdir = require('../util/path');
const path = require('path')
const cart_path = path.join(rootdir, 'data', 'cart.json');

exports.getProducts = (req,res,next) => {
	//res.sendFile(path.join(rootdir,'views','shop.html'));
	Product.fetchProducts().then((bdata)=>{res.render('shop/shop', {Title:'Shop',data:bdata,pathy:'/products'})
	})
}

exports.getCart = (req, res, next) => {
	//cartfetch then=>
	Product.fetchProducts(cart_path).then((products)=>{
	res.render('shop/cart', {Title: 'Cart',pathy: 'shop/cart',products : products})})
}


exports.getCheckout = (req, res, next) => {
	res.render('shop/checkout', {Title:'Checkout',pathy :'shop/checkout'})
}
exports.getIndex  = (req, res, next) =>{
	res.render('shop/index', {Title: 'Welcome',pathy :'shop/index' })
}
exports.getProductDetails = (req, res, next) =>{
	const product_id = req.params.productId;
	Product.findProductbyId(product_id).then((book)=>{res.render('shop/product-details', {Title:'Details',book:book})})
}

exports.getAddtoCart = (req, res, next) =>{
	const product_id = req.body.id;
	Product.findProductbyId(product_id,cart_path).then((book)=>{

		if(!book)
		{
			Product.findProductbyId(product_id).then((product)=>{
			Product.save_cart(product)
			})
		}
		res.redirect('/products')
	})	

}

exports.getRemovefromCart = (req, res, next)=>{

	const productId = req.body.id;
	Product.delete(productId,cart_path).then(()=>{
		res.redirect('/cart');
	})

}

exports.getOrders = (req, res, next) => {
	//cartfetch then=>
	res.render('shop/orders', {Title: 'Orders',pathy: 'shop/orders'})
}