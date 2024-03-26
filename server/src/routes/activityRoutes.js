const { Router } = require('express');
const { createActivity, getAllActivities, getActivityById, updateActivity, deleteActivity } = require('../controllers/activityController');
const { validateCreateActivity } = require('../middleware/activityValidation'); // Input validation middleware

const router = Router();

router.post('/activities', validateCreateActivity, createActivity); // Route to create a new activity
router.get('/activities', getAllActivities); // Route to get all activities
router.get('/activities/:id', getActivityById); // Route to get an activity by ID
router.put('/activities/:id', validateCreateActivity, updateActivity); // Route to update an activity by ID
router.delete('/activities/:id', deleteActivity); // Route to delete an activity by ID

module.exports = router;