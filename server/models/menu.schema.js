import mongoose from "mongoose";

const Schema = mongoose.Schema;

const menuSchema = new Schema({
    sku: {type: String, required: true},
    name: {type: String, required: true},
    combo: {type: Array, required: true},
    price: {type: Number, required: true}
});

export default mongoose.model('Menu', menuSchema);