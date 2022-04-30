var express = require('express');
const { check } = require('express-validator');
var router = express.Router();
const { signout, signup } = require('../controllers/auth');

router.post(
	'/signup',
	[
		check('name', 'name should be at least 3 chars').isLength({ min: 3 }),
		check('email', 'email is required').isEmail(),
		check('password', 'password should be at least 3 chars').isLength({ min: 3 })
	],
	signup
);
router.get('/signout', signout);

module.exports = router;
