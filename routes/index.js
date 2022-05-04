const express = require('express');

const { findOffices } = require('../services/office');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const result = await findOffices(0, 100, 'Michael Paul Galvin Tower');
  console.log(result);
  res.render('index', { title: 'Floor Finder', result });
});

module.exports = router;
