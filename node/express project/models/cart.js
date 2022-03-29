// // cart
// const Product = require('./product.js');
// const path = require('path');
// const rootdir = require('../util/path');
// const fs = require('fs');
// //should a cart for each used where you fetch their object by user id
// //rn the cart is just one big shared cart until we implement users

// const file_path = path.join(rootdir, 'data', 'cart.json');

// module.exports = class Cart {

// 	constructor(product) {
// 		this.product = product;
// 		this.add_item(this);
// 	}

// 	add_item(product) {
	
// 	}

// 	static remove_item(product) {
// 		return new Promise((resolve, reject)=>{
			
// 		})
// 	}

// 	static show_cart_items() {
// 		return new Promise((resolve, reject) => {
// 			fs.readFile(file_path, (err, data) => {
// 				let books = [];
// 				if (err) {
// 					resolve([]);
// 					return
// 				}
// 				try {
// 					books = JSON.parse(data);
// 				}
// 				catch (err) {
// 					resolve([]);
// 				}
// 				resolve(books);
// 			})
// 		})
// 	}
// }