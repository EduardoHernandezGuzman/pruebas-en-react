import React, { useState } from "react";

const ListadoPersonas = (props) => {

    const [personas, setPersonas] = useState([{nombre:"Pepe", edad:"23", localidad:"Madrid"},{nombre:"Luis", edad:"51", localidad:"Huelva"},{nombre:"Raico", edad:"19", localidad:"Zaragoza"}]);



    return(
        <>
            {personas.map(personas => {
                return (
                    <div style={{ border: "solid", borderWidth: 1, marginTop: 4 }} >
                    <br />
                    <h3>{personas.nombre}</h3>
                    <h4>{personas.edad}</h4>
                    <h5>{personas.localidad}</h5>
                    <br />
                    </div>
                )
            })}
        </>
    );
};

export default ListadoPersonas;