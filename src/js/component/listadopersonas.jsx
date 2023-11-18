import React, { useState } from "react";

const ListadoPersonas = () => {

    const [personas, setPersonas] = useState([{nombre:"Pepe", edad:"23", localidad:"Madrid"},{nombre:"Luis", edad:"51", localidad:"Huelva"},{nombre:"Raico", edad:"19", localidad:"Zaragoza"}]);
  
  
  
    return(
      <>
        {personas.map((persona, index) => {
          return (
            <div style={{ border: "solid", borderWidth: 1, marginTop: 4 }} key={index}>
            <br />
            <h3>{persona.nombre}</h3>
            <h4>{persona.edad}</h4>
            <h5>{persona.localidad}</h5>
            <br />
            </div>
          )
        })}
      </>
    );
  };
  
  export default ListadoPersonas;