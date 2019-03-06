const express = require('express');
const router = express.Router();
const generator = require('../models/generator');

express.locals = {
  dadJokes: [

  ]
}

router.get('/', async (req, res, next) => {
  let dadJoke = '';
  if (express.locals.dadJokes.length > 0) {
    dadJoke = express.locals.dadJokes[express.locals.dadJokes.length - 1];
  }
  res.render('index', 
  { 
    title: 'Dad jokes generator - is this thing on?',
    dadJoke
  }
 );
  
});

router.get('/dad-joke', (req, res, next) => {
  const newDadJoke = generator.getDadJoke();
  express.locals.dadJokes.push(newDadJoke);
  res.redirect('/');
})

module.exports = router;
