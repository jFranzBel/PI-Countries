const { Router } = require("express");
const countryRoutes = require('./countryRoutes');
const activityRoutes = require('./activityRoutes');
const activityCountryRoutes = require("./activityCountryRoutes");

const router = Router();

router.use(countryRoutes); // 2 Gets
router.use(activityRoutes); // Full CRUD
router.use(activityCountryRoutes); // Join table look ups

module.exports = router;
