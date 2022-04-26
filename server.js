
const express = require('express');
const app = express();
app.use(express.json());
const db = require("./db.js")
const Pizza = require('./models/pizzaModel.js')


const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')




app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', userRoute)

app.get('/', (req, res) => res.send('Hello !'));




const port = process.env.PORT || 5000;

app.listen(port, () => 'Server running on port ')
