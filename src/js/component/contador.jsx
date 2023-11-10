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
            <div class="container text-center mt-4">
                <div class="row align-items-start">
                    <div class="col-6">
                        <h1>Contador</h1>
                        <h2>{valor}</h2>
                        <button onClick={sumar} >Aumentar</button>
                        <button onClick={reestablecer} >Reestablecer</button>
                        <button onClick={restar} >Disminuir</button>
                    </div>
                    <div class="col-6">
                        2
                    </div>
                    
                </div>
            </div>


        </>
    );
};

export default Contador