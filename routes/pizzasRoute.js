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
module.exports= router;