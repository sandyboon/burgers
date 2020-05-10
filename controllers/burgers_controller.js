const express = require('express');
const Burger = require('../models/burger');

//create an api router
const router = express.Router();

//Get all burgers at root
router.get('/burgers', async function (req, res) {
  try {
    const allBurgers = await Burger.getAllBurgers();
    res.status(200).json({ data: allBurgers });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//creat a new burger
router.post('/burgers', async function (req, res) {
  try {
    const burgerToBeCreated = new Burger(req.body);
    const createdBurger = await burgerToBeCreated.save();
    res.status(201).json({ data: createdBurger });
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

//update a burger
router.put('/burgers', async function (req, res) {
  try {
    const burgerToBeUpdated = new Burger(req.body);
    const savedBurger = await burgerToBeUpdated.save();
    res.status(200).json({ data: savedBurger });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
