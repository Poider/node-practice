//const path = require('path');
const Product = require('../models/product');
books = Product.fetchProducts();
module.exports.getAddproducts =(req,res,next) => {
	//res.sendFile(path.join(rootdir,'views','add-products.html'));
	res.render('add-product',{Title : 'Add product' ,data : books})
}

exports.getProducts = (req,res,next) => {
	//res.sendFile(path.join(rootdir,'views','shop.html'));
	res.render('shop', {Title:'Shop',data:books})
}

exports.getProductadded = (req, res, next)=>{//only after you send it as post u get to see the body request
	// res.sendFile(path.join(__dirname, '../','views','product-added.html'));
	res.render('product-added',{Title: 'Product Added'})
	 new Product(req.body.product_title);
	// product.save();
	// books.push(req.body.product_title);
	//console.log(req.body)
}

exports.body_print = (req, res, next) => {
	// console.log(req.url, i++);
	console.log(req.body);
	next();
}