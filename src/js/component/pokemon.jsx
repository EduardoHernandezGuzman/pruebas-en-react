import React, { useEffect, useState } from "react";

const Pokemon = () => {

    const [personaje , setPersonaje] = useState([]);

    function traerPikachu () {
       
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((response) => response.json())
        .then((data) => setPersonaje(data.results))
        .catch(error => console.log('error', error));


    };


    useEffect ( ()=> {
        traerPikachu ();
    } , []);

   


    return (
        <>
            <h1>Pokédex <span><h6>(traídos desde API)</h6></span></h1>
            <br />
            {personaje.map ((i ,index)=>  
            <p key={index} >{(i.name).toUpperCase()}</p>
            )}
        </>
    );
};

export default Pokemon;