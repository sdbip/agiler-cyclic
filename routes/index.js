const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 'alive', test: process.env.TEST});
});

module.exports = router;
