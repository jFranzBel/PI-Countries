const axios = require('axios');
const { Country } = require('../config/db.js');

const loadApiDataToDB = async () => {
     try {
          const countries = await Country.findAll();
          if (!countries.length) {
               const response = await axios.get('http://localhost:5000/countries');
               const data = response.data.map((e) => ({
                    id: e.cca3,
                    name: e.name.common,
                    flags: e.flags.png,
                    continents: e.continents,
                    capital: e.capital != null ? e.capital[0] : 'No data',
                    subregion: e.subregion,
                    area: e.area,
                    population: e.population,
               }));
               if (data && data.length) {
                    await Country.bulkCreate(data);
               }
          }
     } catch (error) {
          console.error('Error in loadApiDataToDB:', error);
     }
};

module.exports = {
     loadApiDataToDB,
};
