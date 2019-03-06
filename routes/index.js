const express = require('express');
const router = express.Router();
const generator = require('../models/generator');

express.locals = {
  dadJokes: [

  ]
}

router.get('/', (req, res, next) => {
  console.log('from get');
  console.log(generator.getDadJoke());
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
  console.log('from dad-joke');
  const newDadJoke = generator.getDadJoke();
  express.locals.dadJokes.push(newDadJoke);
  res.redirect('/');
})

module.exports = router;
