

const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../')));

const port = process.env.PORT || 4050;

app.listen(port, () => console.log('Listening on port ', port));

