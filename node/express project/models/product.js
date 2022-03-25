const product = []
const fs = require('fs');
const path = require('path');
const rootdir = require('../util/path');
//usually this should save it in a database but we use for now this array

const file_path = path.join(rootdir, 'data', 'file.json');

module.exports = class Product {
	constructor(title,imageurl,price,description) {
		this.title = title;
		this.imageurl = imageurl;
		this.price = price;
		this.description = description;
		this.save();
	}

	save() {
		fs.readFile(file_path, (err, data) => {
			let books = [];
			if (!err) {
				try {
					books = JSON.parse(data);
				}
				catch (err) {
					console.log('resetting json cus of :' + err);
				}

			}
			books.push(this);
			fs.writeFile(file_path, JSON.stringify(books), (err) => {
				console.log(err);
			})
		})//this func is async
		// product.push(this.title);

	}

	static fetchProducts() {
		return new Promise((resolve, reject) => {
			fs.readFile(file_path, (err, data) => {
				let books = [];
				if (err) {
					resolve([]);
					return
				}
				try {
					books = JSON.parse(data);
				}
				catch (err) {
					resolve([]);
				}
				resolve(books);
			})
		})
	}
}