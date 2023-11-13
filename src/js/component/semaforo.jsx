import React, { useState } from "react";

const Semaforo = () => {

    const [colorSeleccionado , SetColorSeleccionado] = useState ("");

    return (

        <>
            <div className="container text-center col-3">
                <div 
                    onClick={ () => SetColorSeleccionado("rojo")}
                    className={
                    "circulo rojo" + ( (colorSeleccionado === "rojo")? " glow" : "" ) 
                    }></div>
                <div
                    onClick={ () => SetColorSeleccionado("amarillo")} 
                    className={
                    "circulo amarillo" + ( (colorSeleccionado === "amarillo")? " glow" : "" ) 
                    }></div>
                <div
                    onClick={ () => SetColorSeleccionado("verde")} 
                    className={
                    "circulo verde" + ( (colorSeleccionado === "verde")? " glow" : "" ) 
                    }></div>
            </div>
        </>

    );
};

export default Semaforo