const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
    username: { type: String, require: true, minLength: 3, maxLength: 10},
})