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
	res.render('admin/product-added', { Title: 'Product Added', message : 'Product Added' , product_action : '/'})
	
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
	productId = req.params.productId;
	Product.findProductbyId(productId).then((product)=>{
	res.render('admin/edit-product', { Title: 'Product Added',product:product})})
}

exports.getProductEditted = (req, res, next) => {
	// productId = req.params.productId;
	// console.log(req.body)

	//check if product changed then change it otherwise dont?
	Product.edit(req.body.id,req.body.product_title,req.body.img_url,req.body.price,req.body.product_description).then((msg)=>{console.log(msg);
	res.render('admin/product-added', { Title: 'Product Editted', message : 'Product Editted' ,product_action : '/admin-products'})})
}

exports.getDeleteProduct = (req, res, next)=>{
	Product.delete(req.body.id).then(()=>{
		res.redirect('/product-deleted');
	})
}

exports.getProductDeleted = (req, res, next) => {
	res.render('admin/product-added', { Title: 'Product Deleted', message : 'Product Deleted',product_action : '/admin-products'})
}

exports.body_print = (req, res, next) => {
	// console.log(req.url, i++);
	console.log(req.body);
	next();
}