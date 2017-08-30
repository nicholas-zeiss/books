

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../')));


app.get('\*', (req, res) => {
	res.redirect('/');
});


const port = process.env.PORT || 4050;

app.listen(port, () => console.log('Listening on port ', port));

