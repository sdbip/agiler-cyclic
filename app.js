var express = require('express');
var path = require('path');

const router = express.Router();

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

router.get('/', function(req, res, next) {
  res.json({message: 'alive', test: process.env.TEST});
});
  
module.exports = app;
