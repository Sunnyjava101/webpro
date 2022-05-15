const express = require('express');
const City = require('../models/city');
const router = express.Router();

router
	.get('/', async (req, res) => {
    try {
      const cities = await City.getCitys();
      res.send(cities);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  
   .post('/register', async (req, res) => {
    try {
      const city = await City.register(req.body);
      console.log(city)
      res.send({...city, password: undefined})
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })
  
	.put('/edit', async (req, res) => {
    try {
      const city = await City.editCity(req.body);
      console.log(city)
      res.send({...city, password: undefined});
    } catch(error) {
      res.status(401).send({message: error.message})
    }
  })
  
 module.exports = router;