import React, { useState } from "react";

const Contador = () => {

    const [valor, setValor] = useState(0);

    const sumar = () => {
            setValor (valor +1)
    }
    
    const restar = () => {
        setValor (valor -1)
    }

    const reestablecer = () => {
        setValor (0)
    }

    return (
        <>
            <h1>Contador</h1>
            <h2>{valor}</h2>
            <button onClick={sumar} >Aumentar</button>
            <button onClick={reestablecer} >Reestablecer</button>
            <button onClick={restar} >Disminuir</button>
        </>
    );
};

export default Contador