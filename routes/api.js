const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/search', (req, res) => {
  console.log(`u searched ${req.query.keyword}`);
  console.log(`start from ${req.query.start}`);
  console.log(`size ${req.query.size}`);
  res.send({
    offices: [
      {
        name: 'Academic Resource Center Galvin Library',
        address: '35 West 33rd Street Lower Level - Rm 007',
        city: 'Chicago',
        state: 'IL',
        zip: '60616',
        hours: '9AM - 8PM',
      },
    ],
    total: 50,
    start: req.query.start,
    size: req.query.size,
  });
});

module.exports = router;
