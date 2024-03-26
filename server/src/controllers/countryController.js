// controllers/countryController.js
const { Country } = require('../config/db.js');
const { Op } = require("sequelize");

// Controller function to get all countries
async function getAllCountries(req, res) {
     try {
          const countries = await Country.findAll();
          res.json(countries);
     } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
     }
}

// Controller function to get a country by ID
async function getCountryById(req, res) {
     const { id } = req.params;
     try {
          const country = await Country.findByPk(id);
          if (!country) {
               res.status(404).json({ error: 'Country not found' });
          } else {
               res.json(country);
          }
     } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
     }
}

// Controller function to get a country by name (case-insensitive)
async function getCountryByName(req, res) {
     const { name } = req.params;
     try {
          const country = await Country.findOne({
               where: {
                    name: { [Op.iLike]: name },
               },
          });
          if (!country) {
               res.status(404).json({ error: 'Country not found' });
          } else {
               res.json(country);
          }
     } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
     }
}

module.exports = { getAllCountries, getCountryById, getCountryByName };
