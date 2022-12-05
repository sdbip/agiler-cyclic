#!/usr/bin/env node
var express = require('express');
const http = require('http');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var router = express.Router();
router.get('/', function(req, res, next) {
  res.json({message: 'alive', test: process.env.TEST});
});
app.use('/', router);

const port = process.env.PORT ?? 80
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
