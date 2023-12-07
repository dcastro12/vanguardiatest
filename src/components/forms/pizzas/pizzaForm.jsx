// PizzaForm.jsx
import React, { useState } from 'react';
import Boton from '../../buttons/login/loginButton';
import './pizzaStyle.css'

function PizzaForm() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [sku, setSku] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [size, setSize] = useState('');

    return (
        <form className="formulario-pizza">
            <div>
                <label htmlFor="name">Nombre:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="price">Precio:</label>
                <input
                    id="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="sku">SKU:</label>
                <input
                    id="sku"
                    type="text"
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="ingredients">Ingredientes:</label>
                <input
                    id="ingredients"
                    type="text"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="size">Tamaño:</label>
                <input
                    id="size"
                    type="text"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                />
            </div>

            {/* Botones */}
            <Boton className="boton-agregar" texto="Agregar" onClick={() => { /* Lógica del botón agregar */ }} />
            <Boton className="boton-editar" texto="Editar" onClick={() => { /* Lógica del botón editar */ }} />
            <Boton className="boton-eliminar" texto="Eliminar" onClick={() => { /* Lógica del botón eliminar */ }} />
            <Boton className="boton-limpiar" texto="Limpiar" onClick={() => { /* Lógica del botón limpiar */ }} />
        </form>
    );
}

export default PizzaForm;
