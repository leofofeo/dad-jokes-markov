const express = require('express');
const router = express.Router();

const data = require('../models/generator');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(data);
  res.render('index', 
  { 
    title: 'Dad jokes generator - is this thing on?',
    data
  }
 );
  
});

module.exports = router;
