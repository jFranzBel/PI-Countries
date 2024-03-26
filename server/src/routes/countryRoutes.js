const { Router } = require('express');
const { getAllCountries, getCountryById, getCountryByName } = require('../controllers/countryController');

const router = Router();

router.get('/countries', getAllCountries); // Route to get all countries
router.get('/countries/:id', getCountryById); // Route to get a country by ID
router.get('/countries/name/:name', getCountryByName); // Route to get a country by name

module.exports = router;
