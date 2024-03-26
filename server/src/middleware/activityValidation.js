const Joi = require('joi');

// Validation schema for creating a new activity
const createActivitySchema = Joi.object({
     name: Joi.string().required(),
     difficulty: Joi.number().integer().required(),
     duration: Joi.number().integer().required(),
     season: Joi.string().valid('Summer', 'Autum', 'Winter', 'Spring').required(),
     countries: Joi.array().items(Joi.string().required()).min(1).required(),
});

// Middleware function to validate the request body using the schema
const validateCreateActivity = (req, res, next) => {
     const { error } = createActivitySchema.validate(req.body);
     if (error) {
          res.status(400).send(error.details[0].message);
     } else {
          next();
     }
};

module.exports = {
     validateCreateActivity,
};
