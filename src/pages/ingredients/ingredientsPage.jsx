import React from "react";
import IngredientForm from "../../components/forms/ingredients/ingredientForm";
import './IngredientsPage.css'

function IngredientPage() {
    return(
        <div className="producto-page">
            <h1>Ingredientes</h1>
            <IngredientForm/>
        </div>
    );
}

export default IngredientPage;