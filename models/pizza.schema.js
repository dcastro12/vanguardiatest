const mongoose = require('mongoose');

const ingridientSchema = new mongoose.Schema({
    sku: {type: String, required: true},
    name: {type: String, required: true},
    quantity: {type: Number, required: true},
    bestbyDate: {type: Date, required: true},
    boughtDate: {type: Date, required: true},
    price: {type: Number, required: true}
});

const pizzaSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    sku: {type: String, required: true},
    ingridients: {type: [ingridientSchema], required: true},
    size: {type: String, required: true}
});

const menuSchema = new mongoose.Schema({
    sku: {type: String, required: true},
    name: {type: String, required: true},
    combo: {type: [pizzaSchema], required: true},
    price: {type: Number, required: true}
});

const pizzaMenu = mongoose.model('Menu', menuSchema);
module.exports = pizzaMenu;