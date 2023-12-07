import React from "react";
import PizzaForm from "../../components/forms/pizzas/pizzaForm";
import './pizzaPage.css'

function PizzaPage() {
    return(
        <div className="pizza-page">
            <h1>Pizzas</h1>
            <PizzaForm/>
        </div>
    );
}

export default PizzaPage;