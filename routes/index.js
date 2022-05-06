const express = require('express');

const { findOffices } = require('../services/office');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const result = await findOffices(0, 100, 'Michael Paul Galvin Tower');
  console.log(result);
  res.render('../floorFinder/index');
});

router.get('/floorOne', async (req, res) => {
  res.render('../floorFinder/floorOne');
});

router.get('/floorTwo', async (req, res) => {
  res.render('../floorFinder/floorTwo');
});

router.get('/floorThree', async (req, res) => {
  res.render('../floorFinder/floorThree');
});

router.get('/floorFour', async (req, res) => {
  res.render('../floorFinder/floorFour');
});

router.get('/floorSeven', async (req, res) => {
  res.render('../floorFinder/floorSeven');
});

router.get('/floorNine', async (req, res) => {
  res.render('../floorFinder/floorNine');
});

module.exports = router;
