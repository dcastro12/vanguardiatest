const Footballer = require('../models/footballerSchema')

exports.createFootballer = async (req, res) => {
    try {
        const newFootballer = new Footballer(req.body);
        await newFootballer.save();
        res.status(201).send(newFootballer);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {createFootballer: createFootballer};