const asyncHandler = require("express-async-handler");
const Location = require('../models/Location');
const { body, validationResult } = require("express-validator");


// FIND ALL LOCATION
exports.get_all_location = asyncHandler(async (req, res, next) => {

    try {
        const allLocations = await Location.find();
        
        if(!allLocations || allLocations.length === 0) {

            res.status(400).json({ error: 'There are no locations available.'})
        }


        res.status(200).json(allLocations);
    } catch(err) {
        
        res.status(400).json({ error: 'Something went wrong, try again.'})
    }    
});

// FIND A LOCATION
exports.find_location = asyncHandler(async (req, res, next) => {
    const { name } = req.params;

    try {
        const findLocation = await Location.find({ name });

        if(!findLocation) {
            
            res.status(400).json({ error: 'Location does not exist' });
        }

        res.status(200).json(findLocation);
    } catch(err) {
        
        res.status(400).json({ error: err});
    }    
});


// CREATE A LOCATION
exports.create_location = [
    body('name')
    .trim()
    .isLength({min: 3, max: 30})
    .escape()
    .withMessage('Name must be between 3 - 30 characters')
    ,
    asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);
    const { name, xAxis, yAxis } = req.body;

    if(!errors.isEmpty()) {

        res.status(400).json({error: errors.errors});
    } else {
        // Add location to db
        try {

            const newLocation = await Location.create({
                name,
                xAxis,
                yAxis
            });

            res.status(200).json(newLocation);

        } catch(error) {

            res.status(400).json({error: 'Something went wrong, try again.'});
        }
    }
    
})
]


// UPDATE LOCATION


// DELETE A LOCATION