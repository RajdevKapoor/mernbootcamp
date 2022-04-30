exports.signup = (req, res) => {
	console.log('REQ BODY', req.body);
	res.json({
		message: 'user signup!'
	});
};

exports.signout = (req, res) => {
	res.json({
		message: 'user signout'
	});
};
