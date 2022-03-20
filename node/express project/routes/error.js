const express = require('express');

const path = require('path');

const router = express.Router();

router.get('/',(req, res,next) => {
	res.redirect('/products');
})

// router.use('/error',(req, res, next)=>{
// 	res.send(`<h1>Error 404</h1>`)
// })
// router.use((req, res, next) => {
// 	// console.log(req.url, i++);
// 	console.log(req.body);
// 	next();
// })
router.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, '../','views','error.html'));
	// res.redirect('/error')
	// res.send();
	// res.end();
})

module.exports = router;