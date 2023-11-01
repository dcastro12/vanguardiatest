const mongoose = require('mongoose')

const allFootballers = new mongoose.Schema
(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        position: {
            type: String,
            required: true
        }   
    }    
);

const Footballer = mongoose.model('Footballer', allFootballers);

module.exports = Footballer;