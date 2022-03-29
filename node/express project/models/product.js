const product = []
// const res = require('express/lib/response');????
const fs = require('fs');
const path = require('path');
const rootdir = require('../util/path');

//usually this should save it in a database but we use for now this array

const cart_path = path.join(rootdir, 'data', 'cart.json');

module.exports = class Product {
	constructor(title,imageurl,price,description) {
		this.title = title;
		this.imageurl = imageurl;
		this.price = price;
		this.description = description;
		this.id = Math.random().toString();
		this.save();
	//	console.log(this.id)
	}

	save(file_path = path.join(rootdir, 'data', 'file.json')) { 
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

	static save_cart(product) {
		return new Promise((resolve, reject) => {
			fs.readFile(cart_path, (err, data) => {
				let books = [];
				if (!err) {
					try {
						books = JSON.parse(data);
					}
					catch (err) {
						console.log('resetting json cus of :' + err);
					}
	
				}
				books.push(product);
				fs.writeFile(cart_path, JSON.stringify(books), (err) => {
					//console.log(err);
				})
			})//this func is async
			// product.push(this.title);
		})


	}

	static fetchProducts(file_path = path.join(rootdir, 'data', 'file.json')) {
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

	static findProductbyId(id, file_path = path.join(rootdir, 'data', 'file.json')){
		return new Promise((resolve, reject) => {
			fs.readFile(file_path, (err, data) => {
				let books = [];
				let book_found;
				// console.log(id)
				if (err) {// if no such file exists
					resolve('file doesnt exist');//change to reject
					return
				}
				try {
					books = JSON.parse(data);
					book_found = books.find((book)=>book.id === id)

				}
				catch (err) {//if reading json failed
					resolve('failed reading json');
				}
				 //console.log(book_found)
				resolve(book_found);
			})
		})
	}

	static delete(id,file_path = path.join(rootdir, 'data', 'file.json')){
		//work on logic all
		return new Promise((resolve, reject) => {
			fs.readFile(file_path, (err, data) => {
				let books = [];
			
				let book_found;
				if (err) {// if no such file exists
					resolve('file doesnt exist');//change to reject
					return
				}
				try {
					books = JSON.parse(data);
					
					book_found = books.find((book)=>book.id === id)
					
					const index = books.indexOf(book_found);
					// console.log(index);
					books.splice(index, 1);
					// console.log(books);
					fs.writeFile(file_path, JSON.stringify(books), (err) => {
						//console.log(err);
					})
					resolve('');
				}
				catch (err) {//if reading json failed
					resolve('failed reading json');
				}
			})
		})
	}
	
	
	static edit(id,title,imageurl,price,description,file_path = path.join(rootdir, 'data', 'file.json')){// I dont like the file searchin all books and REWRITING the whole json file to update 1 book
		return new Promise((resolve, reject) => {
			// console.log('check')
			fs.readFile(file_path, (err, data) => {
				let books = [];		
				let book_found;
				if (err) {// if no such file exists
					resolve('file doesnt exist');//change to reject
					return
				}
				try {
					books = JSON.parse(data);
					book_found = books.find((book)=>book.id === id)
					book_found.title = title;
					book_found.imageurl = imageurl;
					book_found.price = price;
					book_found.description = description;
					//console.log(books)
					const stringified_data = JSON.stringify(books);
					console.log(data);
					fs.writeFile(file_path, stringified_data, (err) => {
						// console.log(err);
						resolve('fail')
						return 
					})
					resolve('success');
				}
				catch (err) {//if reading json failed
					resolve('failed reading json');
				}
			})
		})
	}
}