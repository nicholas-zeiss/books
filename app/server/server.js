

const express = require('express');
const path = require('path');

const app = express();


app.get('/', (req, res) => {
	res.redirect(301, '/home');
});


app.use(express.static(path.join(__dirname, '../')));


app.get(/^\/(home|books|about|contact)$/, (req, res) => {
	console.log('foo', req.path)
	res.sendFile(path.join(__dirname, '../index.html'));
});


app.get('*', (req, res) => {
	console.log('redirect');
	res.redirect(301, '/home');
});


const port = process.env.PORT || 4050;

app.listen(port, () => console.log('Listening on port ', port));

