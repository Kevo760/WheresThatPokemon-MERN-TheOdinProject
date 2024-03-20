var express = require('express');
var router = express.Router();

const scoreControl = require('../controllers/scoreController');


// GET ALL SCORES
router.get('/', scoreControl.get_all_scores);

// CREATE A SCORE
router.post('/', scoreControl.create_score);

// UPDATE A SCORE
router.patch('/', scoreControl.update_score);

module.exports = router