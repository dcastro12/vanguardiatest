// ComboForm.jsx
import React, { useState } from 'react';
import Boton from '../../buttons/login/loginButton';
import './comboStyle.css'

function ComboForm() {
    const [sku, setSku] = useState('');
    const [name, setName] = useState('');
    const [combo, setCombo] = useState(''); 
    const [price, setPrice] = useState('');

    return (
        <form className="formulario-combo">
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
                <label htmlFor="name">Nombre:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="combo">Combo (item1, item2, item3):</label>
                <input
                    id="combo"
                    type="text"
                    value={combo}
                    onChange={(e) => setCombo(e.target.value)}
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

            {/* Botones */}
            <Boton className="boton-agregar" texto="Agregar" onClick={() => { /* Lógica del botón agregar */ }} />
            <Boton className="boton-editar" texto="Editar" onClick={() => { /* Lógica del botón editar */ }} />
            <Boton className="boton-eliminar" texto="Eliminar" onClick={() => { /* Lógica del botón eliminar */ }} />
            <Boton className="boton-limpiar" texto="Limpiar" onClick={() => { /* Lógica del botón limpiar */ }} />
        </form>
    );
}

export default ComboForm;
