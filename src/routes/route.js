const express = require('express');

const logg = require('../logger/logger');
const help = require('../util/helper');
const val = require('../validator/formatter');
const riju = require('../Content/hi');

const router = express.Router();

router.get('/test-me', (req, res)=> {
  // logger
  logg.welcome();
  // util
  help.printDate();
  help.printMonth();
  help.getBatchInfo();
  // validator
  val.trim();
  val.changetoLowerCase();
  val.changeToUpperCase();

  // API Response
  res.send(riju.first);
});

module.exports = router;
