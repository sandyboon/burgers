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
    res.status(500).json(err);
  }
});

//creat a new burger
router.post('/burgers', async function (req, res) {
  try {
    const burgerToBeCreated = new Burger(req.body);
    const createdBurger = burgerToBeCreated.save();
    res.status(201).json({ data: createdBurger });
  } catch (error) {}
});

module.exports = router;
