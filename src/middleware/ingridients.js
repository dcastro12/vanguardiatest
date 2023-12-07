import axios from "axios";

const API_URL = import.meta.env.VITE_URLAPI;

const addIngredient = async (ingredientData) => {
    try {
        const response = await axios.post(`${API_URL}/ingredients`, ingredientData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const updateIngredient = async (sku, ingredientData) => {
    try{
        const response = await axios.put(`${API_URL}/ingredients/${sku}`, ingredientData);
        return response.data;
    }
    catch(error){
        throw error;
    }
}

const deleteIngredient = async (sku) => {
    try {
        const response = await axios.delete(`${API_URL}/ingredients/${sku}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export {addIngredient, updateIngredient, deleteIngredient};