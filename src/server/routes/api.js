const express = require('express');

const nEatController = require('../controllers/nEatController');

const router = express.Router();



router.get('/',
  starWarsController.getCharacters,
  (req, res) => {
    console.log("got a request to get characters.")
    res.status(200).json(res.locals.queryResult.rows);
    // res.send(res.locals.queryString);
  }

);

router.get('/species',
  starWarsController.getSpecies,
  (req, res) => res.status(200).json(res.locals.queryResult.rows[0])
);

router.get('/homeworld',
  starWarsController.getHomeworld,
  (req, res) => res.status(200).json(res.locals.queryResult.rows[0])
);

router.get('/film',
  starWarsController.getFilm,
  (req, res) => res.status(200).json({})
);

router.post('/character',
  starWarsController.addCharacter,
  (req, res) => res.status(200).json({})
);

module.exports = router;
