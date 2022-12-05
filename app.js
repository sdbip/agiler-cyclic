#!/usr/bin/env node
import express, { json, urlencoded, Router } from 'express';
import { createServer } from 'http';

var app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

var router = Router();
router.get('/', function(req, res, next) {
  res.json({message: 'alive', test: process.env.TEST});
});
app.use('/', router);

const port = process.env.PORT ?? 80
app.set('port', port);

const server = createServer(app);
server.listen(port);
