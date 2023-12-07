import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Login from './pages/login/loginPage';
import PizzaPage from './pages/pizzas/pizzaPage';
import ComboPage from './pages/combos/comboPage';
import IngredientPage from './pages/ingredients/ingredientsPage';

function App() {
    return (
        <div className="App">
            <IngredientPage/>
        </div>
    );
}

export default App;