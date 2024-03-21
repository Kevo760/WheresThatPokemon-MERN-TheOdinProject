var express = require('express');
var router = express.Router();

// IMPORT CONTROLLER
const scoreControl = require('../controllers/scoreController');


// GET ALL SCORES
router.get('/', scoreControl.get_all_scores);

// GET A SINGLE SCORE

// CREATE A SCORE
router.post('/', scoreControl.create_score);

// DELETE A SCORE

// UPDATE A SCORE
router.patch('/', scoreControl.update_score);

module.exports = router