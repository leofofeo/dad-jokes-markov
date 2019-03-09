const express = require('express');
const router = express.Router();
const generator = require('../models/generator');
const app = express();

router.get('/', (req, res, next) => {
  res.render('index', 
  { 
    title: 'Dad jokes generator - is this thing on?'
  }
 );
});

router.get('/joke-data', async (req, res, next) => {
  const frequencyTableData = await loadFrequencyTableData();
  console.log('obtained table data');
  app.locals.jokesData = frequencyTableData;
  res.json({success: 'data loaded', status: 200, data: frequencyTableData});
})

router.get('/dad-joke', (req, res, next) => {
  const newDadJoke = generator.getDadJoke();
  res.json({success : "Successful call", status : 200, results: newDadJoke});
})

const loadFrequencyTableData = async () => {
  console.log('from frequencyTableData');
  
  await setTimeout(() => {
    console.log('from setTimeout');
  }, 2000);
}

module.exports = router;
