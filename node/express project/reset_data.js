// let text = "hehe bish"
// text.replace(/e/g,"o")
// console.log(text);
const path = require('path');
const rootdir = require('./util/path.js')
// const filepath = path.join(rootdir,'data','file.json');
const filepath = path.join(rootdir, 'package.json')
const fs = require('fs');
let test;
const reset  =  () => {
	test = [
		{
		  id: '3141',
		  title: 'book1',
		  imageurl: 'https://media.gettyimages.com/photos/single-red-book-on-a-white-surface-picture-id173015527?s=612x612',
		  price: '12',
		  description: 'hehe'
		},
		{
		  id: '31241',
		  title: 'efgc',
		  imageurl: 'http://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png',
		  price: '13',
		  description: 'fafa'
		},
		{
		  id: '311141',
		  title: 'aa',
		  imageurl: 'https://st2.depositphotos.com/1105977/5461/i/600/depositphotos_54615585-stock-photo-old-books-on-wooden-table.jpg',
		  price: '123',
		  description: 'asd'
		},
		{
		  id: '314141',
		  title: 'ss',
		  imageurl: 'https://media.gettyimages.com/photos/stack-of-books-picture-id157482029?s=612x612',
		  price: '131',
		  description: 'dasfa'
		}
	  ];
	data = JSON.stringify(test);
	//   console.log(data);
	fs.writeFile(path.join(rootdir, 'data/file.json'), data, (err) => { })
}
// setTimeout(() =>{
reset();
// ,2000})

//problem when I empty json file then it gives a bug, 2nd make it use promises in fetching all cus read is async

