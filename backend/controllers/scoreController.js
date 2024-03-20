const asyncHandler = require("express-async-handler");
const Score = require('../models/Score');
const { body, validationResult} = require("express-validator");


// Gets all scores
exports.get_all_scores = asyncHandler(async(req, res, next) => {
    const getAllScores = await Score.find()

    if(!getAllScores || getAllScores.length === 0) {
        res.status(400).json({ error: 'There are no scores.'})
    }

    res.status(200).json(getAllScores)
});

// Create a score 

exports.create_score = asyncHandler(async(req, res, next) => {
   
    const newScore = await Score.create({
        timeStart: Date.now()
    });

    if(!newScore) {
        res.status(400).json({ error: 'Something went wrong, try again.'})
    }

    res.status(200).json(newScore);

});

// Update score
exports.update_score = [
    body('username')
    .trim()
    .isLength({ min: 3, max: 10})
    .withMessage('Title must have 3 to 10 characters')
    .escape()
    ,
    asyncHandler(async(req, res, next) => {
    const errors = validationResult(req);
    const { id, username } = req.body;
    const currentDate = Date.now();

    if(!errors.isEmpty()) {
        res.status(400).json({ error: errors.errors})
    } 

    const findScore = await Score.findById(id)

    if(!findScore || !findScore.timeStart) {
        res.status(400).json({ error: 'Something went wrong, reload the page again.'})
    } else {
        const timestart = findScore.timeStart;
        const timeDifference = currentDate - timestart;

        const updateScore = await Score.findByIdAndUpdate(
            {_id: id},
            { $set:
                {
                    username,
                    timeEnd: currentDate,
                    timeScore: timeDifference
                }

            }
        );

        res.status(400).json(updateScore);
    }
})
];