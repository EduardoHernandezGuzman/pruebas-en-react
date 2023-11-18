import React, { useEffect, useState } from "react";

const Listadousuariosapi = () => {

    const [usuarioApi , setUsuarioApi] = useState([]);

    function traerUsuariosApi() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsuarioApi(data))
        .catch(error => console.log('error', error));
    };

    useEffect(()=> {
        traerUsuariosApi ();
    },[]);




    return (
       
        <>
            // aquí tengo que mapear usuarioApi 
        </>


    );
};

export default Listadousuariosapi;