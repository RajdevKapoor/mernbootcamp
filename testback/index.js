const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

const admin = (req, res) => {
	res.send('this is admin');
};

const isAdmin = (req, res, next) => {
	console.log('is admin is running');
	next();
};

app.get('/admin', isAdmin, admin);

app.listen(port, () => {
	console.log(`Server is up and running on port ${port}`);
});
