const mongoose = require('mongoose')

const charactersSchema = new mongoose.Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model("Characters", charactersSchema);