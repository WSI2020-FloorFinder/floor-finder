const express = require('express');
const { findOffices } = require('../services/office');

const router = express.Router();

/* GET or search offices. */
router.get('/search', async (req, res) => {
  console.log(`u searched ${req.query.keyword}`);
  console.log(`fields ${req.query.fields}`);
  console.log(`start from ${req.query.start}`);
  console.log(`size ${req.query.size}`);

  const start = parseInt(req.query.start || 0, 10);
  const size = parseInt(req.query.size || 10, 10);

  const result = await findOffices(
    start,
    size,
    req.query.keyword,
    (req.query.fields || '').split(',')
  );

  res.send({
    offices: result.offices,
    count: result.count,
    start,
    size,
  });
});

module.exports = router;
