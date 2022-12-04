var express = require('express');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var router = express.Router();
router.get('/', function(req, res, next) {
  res.json({message: 'alive', test: process.env.TEST});
});
app.use('/', router);

module.exports = app;
