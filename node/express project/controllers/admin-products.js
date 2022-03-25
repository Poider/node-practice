//const path = require('path');books = Product.fetchProducts();
const Product = require('../models/product');
let books = [];

// const fetchin = ()=>{
// return (new Promise((resolve, reject) => {books = Product.fetchProducts();
// resolve(books);
// }))
// }
module.exports.getAddproducts = (req, res, next) => {
	//res.sendFile(path.join(rootdir,'views','add-products.html'));
	//	fetchin().then(()=>{(bdata)=>console.log(bdata)})

	Product.fetchProducts().then((bdata) => {
		res.render('admin/add-product.pug', { Title: 'Add product', data: bdata, pathy: '/add-product' })
	})
}



exports.getProductadded = (req, res, next) => {//only after you send it as post u get to see the body request
	// res.sendFile(path.join(__dirname, '../','views','product-added.html'));
	new Product(req.body.product_title,req.body.img_url,req.body.price,req.body.product_description);
	res.render('admin/product-added', { Title: 'Product Added'})
	
	// product.save();
	// books.push(req.body.product_title);
	//console.log(req.body)
}

exports.getAdminProducts = (req, res, next)=>{
	Product.fetchProducts().then((bdata) => {
		res.render('admin/products-list-admin', { Title: 'Product list : Admin',data:bdata, pathy:'/admin-products'})
	})
	}

exports.getEditProduct = (req, res, next)=>{
	res.render('admin/edit-product', { Title: 'Product Added'})
}

exports.body_print = (req, res, next) => {
	// console.log(req.url, i++);
	console.log(req.body);
	next();
}