var express = require('express');
var router = express.Router();

// IMPORT CONTROLLER
const locationController = require('../controllers/locationController');


// FIND ALL LOCATION
router.get('/', locationController.get_all_location);

// FIND A LOCATION
router.get('/:name', locationController.find_location);

// CREATE A LOCATION
router.post('/', locationController.create_location);

// UPDATE LOCATION

// DELETE A LOCATION





module.exports = router