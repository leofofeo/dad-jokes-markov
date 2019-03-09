const express = require('express');
const router = express.Router();
const generator = require('../models/generator');

router.get('/', async (req, res, next) => {
  res.render('index', 
  { 
    title: 'Dad jokes generator - is this thing on?'
  }
 );
  
});

router.get('/dad-joke', (req, res, next) => {
  const newDadJoke = generator.getDadJoke();
  res.json({success : "Successful call", status : 200, results: newDadJoke});
})

module.exports = router;
