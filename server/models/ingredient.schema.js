import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    sku: {type: String, required: true},
    name: {type: String, required: true},
    quantity: {type: Number, required: true},
    bestbyDate: {type: Date, required: true},
    boughtDate: {type: Date, required: true},
    price: {type: Number, required: true}
});

export default mongoose.model('Ingredient', ingredientSchema);