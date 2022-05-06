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

router.get('/floorTwelve', async (req, res) => {
  res.render('../floorFinder/floorTwelve');
});

router.get('/floorThirteen', async (req, res) => {
  res.render('../floorFinder/floorThirteen');
});

router.get('/floorFourteen', async (req, res) => {
  res.render('../floorFinder/floorFourteen');
});

router.get('/floorFifteen', async (req, res) => {
  res.render('../floorFinder/floorFifteen');
});

router.get('/floorSixteen', async (req, res) => {
  res.render('../floorFinder/floorSixteen');
});

router.get('/floorEighteen', async (req, res) => {
  res.render('../floorFinder/floorEighteen');
});

router.get('/iit-tower', async (req, res) => {
  const result = await findOffices(0, 100, 'Michael Paul Galvin Tower');
  console.log(result);
  res.render('index', { title: 'IIT Tower', result });
});

/* GET navigation page. */
router.get('/navigation', async (req, res) => {
  const result = await findOffices(0, 100);
  res.render('navi', { title: 'Campus Navigator', result, apiKey: process.env.API_KEY });
});

module.exports = router;
