import mongoose from "mongoose";

const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    sku: {type: String, required: true},
    ingridients: {type: Array, required: true},
    size: {type: String, required: true}
});

export default mongoose.model('Pizza', pizzaSchema);