const express = require('express');
const City = require('../models/city');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const users = await City.getCities();
      res.send(users);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/register', async (req, res) => {
    try {
      const user = await City.register(req.body);
      console.log(user)
      res.send({...user, password: undefined})
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })
  
module.exports = router;