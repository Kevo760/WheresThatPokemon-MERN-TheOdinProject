const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    name: { type: String, minLength: 3, maxLength: 30, required: true, unique: true },
    xAxis: { type: Array, required: true },
    yAxis: { type: Array, required: true }
})

// Export model
module.exports = mongoose.model("Location", LocationSchema);