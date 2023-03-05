const express = require('express');

const router = express.Router();
const { get } = require('mongoose');
const entryLogger = require('../logger');

// Importing the User Model or Schema
const transactionEntry = require('../models/entries');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/index', (req, res) => {
  res.render('index');
});

router.post('/', async (req, res) => {
  try {
    const transaction = new transactionEntry(req.body);
    await transaction.save();
    res.redirect('/');
  } catch (error) {
    res.status(400).send('Sorry we were unable to save the transaction.');
    // console.log(error);
  }
});

entryLogger.info('New calculator entry created');
entryLogger.error(`Unable to save calculator entry: ${err}`);

module.exports = router;
