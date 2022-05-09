const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/login', async (req, res) => {
 try {
	const user = await User.login(req.body.username, req.body.password);
	res.send( {...user, password: undefined } );
 } catch(err) {
	res.status(401).send({message: err.message});
 }
}); 

module.exports = router;