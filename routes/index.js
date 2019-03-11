const express = require('express');
const router = express.Router();
const generator = require('../models/generator');

router.get('/', (req, res, next) => {
  res.render('index', 
  { 
    title: 'Dad jokes generator - is this thing on?'
  }
 );
});

router.get('/dad-joke', (req, res, next) => {
  //const newDadJoke = generator.getDadJoke();
  return generator.then(generator => generator.getDadJoke())
  .then(newDadJoke => {
    console.log(util.inspect(newDadJoke,false,4));
    res.json({success : "Successful call", status : 200, results: newDadJoke});
  });
});


module.exports = router;
