const express = require('express');
const router = express.Router();
const { Customer, validate } = require('../models/customer');

router.get('/', async (req, res) => {
    const customer = await Customer.find();
    res.send(customer);
  });


module.exports = router;