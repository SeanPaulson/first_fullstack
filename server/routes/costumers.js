const express = require('express');
const router = express.Router();
const { Customer, validate } = require('../models/customer');

router.get('/', async (req, res) => {
    const customer = await Customer.find();
    res.send(customer);
  });

  router.post('/', async (req,res) => {

    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    
    let customer = await Customer.findOne({email: req.body.email});
    if (customer) return res.status(400).send('Email already registered');
    
    customer = new Customer({ 
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
      });
    
      await customer.save();
    
      res.send(customer);
    });


module.exports = router;