import React from "react";

const Temporizador = () => {

    let numero = 1000;

    const cuentaAtras = () => {
        numero --;
        document.getElementById("numeroAMostrar").textContent = numero;
    };

    setInterval(cuentaAtras,1000);


    return (
    <>
        <h1>Cuenta atrás desde 1000</h1>
        <h2 id="numeroAMostrar" ></h2>
    </>
    );
};

export default Temporizador