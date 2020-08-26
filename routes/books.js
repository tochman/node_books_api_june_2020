const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ books: [{ title: 'NodeJS Intro' }] });
});

module.exports = router;
