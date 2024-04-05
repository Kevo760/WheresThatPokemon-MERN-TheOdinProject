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
exports.update_score = 
    asyncHandler(async(req, res, next) => {
    const { id } = req.params;
    const { username } = req.body;

    const currentDate = Date.now();

    try {

        const findScore = await Score.findById(id)

        if(!findScore || !findScore.timeStart) {
            res.status(400).json({ error: 'Something went wrong, reload the page again.'})
            }
    
        // If there is no timeEnd add timeEnd
        if(!findScore.timeEnd) {
            const timestart = findScore.timeStart;
            const timeDifference = currentDate - timestart;
    
            const updateScore = await Score.findByIdAndUpdate(
                {_id: id},
                { $set:
                    {
                        timeEnd: currentDate,
                        timeScore: timeDifference
                    }
                },
                {returnDocument: 'after'}
            );

            res.status(200).json(updateScore);
        
        // If there is a timeEnd and username update username
        } else if(findScore.timeEnd && username) {
            const updateScore = await Score.findByIdAndUpdate(
                {_id: id},
                { $set:
                    {
                        username,
                    }
                },
                {returnDocument: 'after'}
            );
            
            res.status(200).json(updateScore);
        }

    } catch(err) {
        res.status(400).json({ error: 'Something went wrong, reload the page again.'})
    }

});