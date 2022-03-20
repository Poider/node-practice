// const http = require('http');
//const fs = require('fs');

const express = require('express');
const parser = require('body-parser');

const app = express();

const shoproutes = require('./routes/shop.js');
const adminroutes = require('./routes/admin.js');
const errorroutes = require('./routes/error')

function routing(){
app.use(parser.urlencoded({extended: false}));
app.use(shoproutes);
app.use(adminroutes);
app.use(errorroutes);
}
// let i = 0;

routing();
// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);