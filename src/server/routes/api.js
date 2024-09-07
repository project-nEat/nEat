const express = require('express');

const nEatController = require('../controllers/nEatController');

const router = express.Router();


router.post('/loginorsignup',
  nEatController.checkUser,
  (req, res) => {

    console.log("got a request to add or varify a user.")
    console.log('loginorsignup req.body: ', req.body);
    console.log('res.locals.response: ', res.locals.response);
    res.status(200).json(res.locals.response);
  }

);

router.post('/addfooditem',
  nEatController.addFood,
  (req, res) => {

    console.log("got a request to add a fooditem.");
    
    console.log('addfooditem req.body: ', req.body);
    console.log('res.locals.response: ', res.locals.response);
    res.status(200).json(res.locals.response);
  }

);

module.exports = router;
