// let text = "hehe bish"
// text.replace(/e/g,"o")
// console.log(text);
const path = require('path');
const rootdir = require('./util/path.js')
// const filepath = path.join(rootdir,'data','file.json');
const filepath = path.join(rootdir, 'package.json')
const fs = require('fs');
let test;
fs.readFile(filepath, (err, data) => {
	// test = JSON.stringify(data);

	fs.writeFile(path.join(rootdir, 'lol.json'), data, (err) => { })
})
// setTimeout(() =>{

// ,2000})

//problem when I empty json file then it gives a bug, 2nd make it use promises in fetching all cus read is async

