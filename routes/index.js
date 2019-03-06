const express = require('express');
const router = express.Router();

const dadJoke = require('../models/generator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
    title: 'Dad jokes generator - is this thing on?',
  }
 );
  
});

router.get('/dadjoke', (req, res, next) => {

})

module.exports = router;
