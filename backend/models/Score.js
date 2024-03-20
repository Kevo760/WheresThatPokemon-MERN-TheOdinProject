const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
    username: { type: String, minLength: 3, maxLength: 10},
    timeStart: { type: Date },
    timeEnd: { type: Date },
    timeScore: { type: String }
});

module.exports = mongoose.model("Score", ScoreSchema);