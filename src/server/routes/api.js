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
    //res.status(200).json(res.locals.queryResult.rows);
    // res.send(res.locals.queryString);
  }

);

router.post('/addfooditem',
  nEatController.addFood,
  (req, res) => {

    console.log("got a request to add a fooditem.")
    console.log('addfooditem req.body: ', req.body);
    console.log('res.locals.response: ', res.locals.response);
    res.status(200).json(res.locals.response);
    //res.status(200).json(res.locals.queryResult.rows);
    // res.send(res.locals.queryString);
  }

);

// router.get('/',
//   starWarsController.getCharacters,
//   (req, res) => {
//     console.log("got a request to get characters.")
//     res.status(200).json(res.locals.queryResult.rows);
//     // res.send(res.locals.queryString);
//   }

// );

// router.get('/species',
//   starWarsController.getSpecies,
//   (req, res) => res.status(200).json(res.locals.queryResult.rows[0])
// );

// router.get('/homeworld',
//   starWarsController.getHomeworld,
//   (req, res) => res.status(200).json(res.locals.queryResult.rows[0])
// );

// router.get('/film',
//   starWarsController.getFilm,
//   (req, res) => res.status(200).json({})
// );

// router.post('/character',
//   starWarsController.addCharacter,
//   (req, res) => res.status(200).json({})
// );

module.exports = router;
