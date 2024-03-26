const { Activity, Country } = require("../config/db.js");
const { Op } = require("sequelize");

// Controller function to create a new activity
async function createActivity(req, res) {
     const { name, difficulty, duration, season, countries } = req.body;
     try {
          // Check if all required data is provided
          if (name && difficulty && duration && season && countries) {
               // Create the activity
               const activity = await Activity.create({
                    name,
                    difficulty,
                    duration,
                    season,
               });
               // Associate the activity with countries
               for (const id of countries) {
                    const country = await Country.findOne({
                         where: { id: { [Op.iLike]: `%${id}%` } },
                    });
                    await country?.addActivity(activity);
               }
               return activity;
          } else {
               throw new Error("Missing data");
          }
     } catch (error) {
          throw error;
     }
}

// Controller function to get all activities
async function getAllActivities(req, res) {
     try {
          const activities = await Activity.findAll();
          res.json(activities);
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal Server Error" });
     }
}

// Controller function to get an activity by ID
async function getActivityById(req, res) {
     const activityId = req.params.id;
     try {
          const activity = await Activity.findByPk(activityId);
          if (activity) {
               res.json(activity);
          } else {
               res.status(404).json({ message: "Activity not found" });
          }
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal Server Error" });
     }
}

// Controller function to update an activity by ID
async function updateActivity(id, data) {
     try {
          const activity = await Activity.findByPk(id);
          if (!activity) {
               throw new Error("Activity not found");
          }
          activity.name = data.name;
          activity.difficulty = data.difficulty;
          activity.duration = data.duration;
          activity.season = data.season;
          await activity.save();
          return activity;
     } catch (error) {
          throw error;
     }
}

// Controller function to delete an activity by ID
async function deleteActivity(id) {
     try {
          const activity = await Activity.findByPk(id);
          if (!activity) {
               throw new Error("Activity not found");
          }
          await activity.destroy();
     } catch (error) {
          throw error;
     }
}

module.exports = {
     createActivity,
     getAllActivities,
     getActivityById,
     updateActivity,
     deleteActivity,
};
