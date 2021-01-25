/* eslint-disable */
const express = require('express');

const emojis = require('./emojis');
const prs = require('./prs');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/prs', prs);

module.exports = router;
