const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const port = process.env.PORT || 3000;

// BODY PARSER MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// STATIC FOLDER
app.use(express.static(`${__dirname}/www`));

// INDEX ROUTE
app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(port, () => {
  console.log('Server has started on :' + port);
});
