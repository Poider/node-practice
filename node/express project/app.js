// const http = require('http');
//const fs = require('fs');

const express = require('express');
const parser = require('body-parser');
const path = require('path');
const app = express();

const shoproutes = require('./routes/shop.js');
const adminroutes = require('./routes/admin.js');
const errorroutes = require('./routes/error')


function otherfunctionality() {
	app.set('view engine', 'pug');
	app.set('views', './views/templates');
	app.use(express.static(path.join(__dirname, 'public'))); //setting the public static folder of public stuff
	app.use(parser.urlencoded({ extended: false })); // setting the parser for text
}

function routing() {
	app.use(shoproutes);
	app.use(adminroutes);
	app.use(errorroutes);
}
// let i = 0;
otherfunctionality();
routing();
// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);