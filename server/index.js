require("dotenv").config();
const server = require("./src/server");
const { conn } = require("./src/config/db.js");
const { loadApiDataToDB } = require("./src/util/loadApiDataToDB.js");
const { PORT } = process.env;

(async () => {
     try {
          await conn.sync({ force: true });
          console.log("Database schema synchronized.");
          await loadApiDataToDB(); // Load data from the API to the database
          console.log("Data loaded from API to Database.");
          server.listen(PORT, () => {
               console.log(`Server listening on port ${PORT}.`);
          });
     } catch (error) {
          console.error(error);
     }
})();
