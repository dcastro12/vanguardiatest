import React from "react";
import './buttonStyle.css';

function Boton({ texto, onClick, className }){
    return(
        <button className={`boton ${className}`} onClick={onClick}>
        {texto}
        </button>
    );
}

export default Boton;