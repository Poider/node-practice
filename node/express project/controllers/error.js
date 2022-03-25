exports.getError = (req, res, next) => {
	// res.status(404).sendFile(path.join(__dirname, '../','views','error.html'));
	res.status(404).render('error',{Title:'Page Not Found',pathy:'/error'});
	// res.redirect('/error')
	// res.send();
	// res.end();
}

exports.routeRedirect = (req, res,next) => {
	res.redirect('/products');
}