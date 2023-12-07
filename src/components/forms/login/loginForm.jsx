// LoginForm.jsx
import React, { useState } from 'react';
import './loginStyle.css';
import Boton from '../../buttons/login/loginButton';

function LoginForm() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!user || !password){
            alert('Por favor, completar todos los campos.');
            return;
        }
        
        console.log('Usuario:', user);
        console.log('Contraseña:', password);
        // Aquí puedes agregar la lógica para manejar el inicio de sesión
    };

    return (
        <form className='formulario' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="usuario">Usuario:</label>
                <input
                    id="usuario"
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="contraseña">Contraseña:</label>
                <input
                    id="contraseña"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Boton texto = "Iniciar Sesión" onClick={handleSubmit}/>
        </form>
    );
}

export default LoginForm;
