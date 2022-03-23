const product = []
const fs = require('fs');
const path = require('path');
const rootdir =require('../util/path');
//usually this should save it in a database but we use for now this array

const file_path = path.join(rootdir,'data','file.json');

module.exports = class Product{
	constructor(title) {
		this.title = title;
		 this.save();
	}

	save(){
		fs.readFile(file_path,(err, data) => {
			let books = [];
			if(!err) {
				books = JSON.parse(data);
			}
			books.push(this);
			fs.writeFile(file_path,JSON.stringify(books),(err) => {
				console.log(err);
			})
		})//this func is async
		// product.push(this.title);

	}

	static fetchProducts(){
		return product;
	}
}