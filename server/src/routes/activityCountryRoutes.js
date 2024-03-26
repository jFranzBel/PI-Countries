// controllers/activityCountryController.js
const { Router } = require("express");
const { getCountryIdsByActivityId, getActivityIdsByCountryId } = require("../controllers/activityCountryController");

const router = Router();

router.get("/activity-country/:activityId", getCountryIdsByActivityId);
router.get("/country-activity/:countryId", getActivityIdsByCountryId);

module.exports = router;
