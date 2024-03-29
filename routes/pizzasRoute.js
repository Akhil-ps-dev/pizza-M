const express = require('express');
const req = require('express/lib/request');
const Pizza = require('../models/pizzaModel.js')
const router = express.Router();



router.get("/getallpizzas", async (req, res) => {

    try {
        const pizzas = await Pizza.find({})
        res.send(pizzas)
    } catch (error) {
        return res.status(400).json({ message: error });

    }


});

router.post("/addpizza", async (req, res) => {

    const pizza = req.body.pizza

  try {
    const newpizza = new Pizza({
        name : pizza.name,
        image :pizza.image,
        varients: ['small','medium','large'],
        descriptioin:pizza.descriptioin,
        category: pizza.category,
        prices: [pizza.prices]
    })
    await newpizza.save()
      res.send(' New Food Added successfully')
  } catch (error) {
     return res.status(400).json({message: error})
      
  }
});

router.post("/getpizzabyid", async (req, res) => {
    const pizzaid = req.body.pizzaid

    try {
        const pizza = await Pizza.findOne({_id: pizzaid})
        res.send(pizza)
    } catch (error) {
        return res.status(400).json({message: error})
    }
});

router.post("/deletepizza", async (req, res) => {
const pizzaid = req.body.pizzaid
try {
await Pizza.findOneAndDelete({_id: pizzaid})
    res.send('pizza deleted successfully')
} catch (error) {
    return res.status(400).json({message: error})
    
}

});



module.exports= router;