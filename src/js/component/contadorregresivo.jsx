import React, { useState } from "react";

const Contadorregresivo = () => {

    const [valor, setValor] = useState(200);

//    const disminuyeEnCinco = () => {
//        setValor (valor -5)
//    };

    const [mostrarOcultar, setMostrarOcultar] = useState(true);

    function clickMostrar() {
        setMostrarOcultar (!mostrarOcultar)
    }


    return (
        <>
            <h1>Contador regresivo</h1>
            {mostrarOcultar ? <h2>{valor}</h2> : <h2>......</h2>  }
            <button onClick={() => {setValor (valor -5)}} >Disminuye en 5</button>
            <button onClick={()=> setValor(valor -10)} >Disminuye en 10</button>
            <button onClick={clickMostrar} >Mostrar/Ocultar contador</button>
        </>
    );
};

export default Contadorregresivo