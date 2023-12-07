// IngredientForm.jsx
import React, { useState } from 'react';
import Boton from '../../buttons/login/loginButton';
import './ingredientStyle.css'
import { addIngredient, deleteIngredient, updateIngredient } from '../../../middleware/ingridients';

function IngredientForm() {
    const [sku, setSku] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [bestbyDate, setBestbyDate] = useState('');
    const [boughtDate, setBoughtDate] = useState('');
    const [price, setPrice] = useState(0);
    
    const handleAdd = async (event) => {
        event.preventDefault();
        try{
            const newIngridient = await addIngredient({sku, name, quantity, bestbyDate, boughtDate, price});
            console.log('Ingrediente agregado: ', newIngridient);
        }
        catch(error)
        {
            console.error('Error al agregar ingrediente: ', error);
        }
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        try{
            if(sku) {
                await deleteIngredient(sku);
                alert(`Ingrediente con SKU ${sku} eliminado`)
                console.log(`Ingrediente con SKU ${sku} eliminado`);
            }
            else {
                alert('SKU es requerido para eleminar');
            }
        }
        catch (error){
            alert('Error al eliminar ingrediente.')
            console.error('Error al eliminar ingrediente: ', error);
        }
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        try{
            if (sku)
            {
                const updatedIngredient = await updateIngredient(sku, {name, quantity, price});
                alert(`Ingrediente con SKU ${sku} actualizado`)
                console.log(`Ingrediente con SKU ${sku} actualizado`);
            }
            else {
                alert('SKU es requerido para actualizar');
            }
        }
        catch (error) {
            alert('Error al actualizar ingrediente.')
            console.error('Error al actualizar ingrediente: ', error);
        };
    };

    return (
        <form className="formulario-producto">
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
                <label htmlFor="quantity">Cantidad:</label>
                <input
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="bestbyDate">Fecha de Vencimiento:</label>
                <input
                    id="bestbyDate"
                    type="date"
                    value={bestbyDate}
                    onChange={(e) => setBestbyDate(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="boughtDate">Fecha de Compra:</label>
                <input
                    id="boughtDate"
                    type="date"
                    value={boughtDate}
                    onChange={(e) => setBoughtDate(e.target.value)}
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
            <Boton className="boton-agregar" texto="Agregar" onClick={handleAdd}/>
            <Boton className="boton-editar" texto="Editar" onClick={handleUpdate} />
            <Boton className="boton-eliminar" texto="Eliminar" onClick={handleDelete} />
            <Boton className="boton-limpiar" texto="Limpiar" onClick={() => { /* Lógica del botón limpiar */ }} />
        </form>
    );
}

export default IngredientForm;