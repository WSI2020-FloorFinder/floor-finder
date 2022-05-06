const express = require('express');

const { findOffices } = require('../services/office');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const result = await findOffices(0, 100, 'Michael Paul Galvin Tower');
  console.log(result);
  res.render('index', { title: 'Floor Finder', result });
});

/* GET navigation page. */
router.get('/navigation', async (req, res) => {
  const result = await findOffices(0, 100);
  res.render('navi', { title: 'Campus Navigator', result, apiKey: process.env.API_KEY });
});

module.exports = router;
