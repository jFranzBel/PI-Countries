const { Activity, Country } = require("../config/db.js");

// Controller function to get country ids related to an activity
async function getCountryIdsByActivityId(req, res) {
     const { activityId } = req.params;
     try {
          const activity = await Activity.findByPk(activityId, {
               include: {
                    model: Country,
                    attributes: ["id"],
                    through: { attributes: [] },
               },
          });
          if (!activity) {
               res.status(404).json({ error: "Activity not found" });
          }
          const countryIds = activity.Countries.map((country) => country.id);
          res.json(countryIds);
     } catch (error) {
          res.status(500).json({ error: "Internal server error" });
     }
}

// Controller function to get activity ids related to a country
async function getActivityIdsByCountryId(req, res) {
     const { countryId } = req.params;
     try {
          const country = await Country.findByPk(countryId, {
               include: {
                    model: Activity,
                    attributes: ["id"],
                    through: { attributes: [] },
               },
          });
          if (!country) {
               res.status(404).json({ error: "Country not found" });
               return;
          }
          const activityIds = country.Activities.map((activity) => activity.id);
          if (activityIds.length === 0) {
               res.json({ message: "No activities found, list is empty" });
          } else {
               res.json(activityIds);
          }
     } catch (error) {
          res.status(500).json({ error: "Internal server error" });
     }
}

module.exports = { getCountryIdsByActivityId, getActivityIdsByCountryId };
