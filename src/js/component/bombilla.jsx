import React, { useState } from "react";

const Bombilla = () => {

    const [luz , setLuz] = useState (true);

    function interruptor() {
        setLuz(!luz)
    };

    
    return (
        <>
            <h1>La bombilla está:</h1>
            {luz ? <h2>Encendida</h2> : <h2>Apagada</h2>}
            <button onClick={interruptor} >Interruptor</button>
        </>

    );
};

export default Bombilla