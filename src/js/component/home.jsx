import React from "react";
import Contador from "./contador";
import Temporizador from "./temporizador";


const Home = () => {
	
	return (
		<>
			 <div class="container text-center mt-4">
                <div class="row align-items-start">
                    <div class="col-6">
                        <Contador></Contador>
                    </div>
                    <div class="col-6">
                        <Temporizador></Temporizador>
                    </div>
                    
                </div>
            </div>
		
		</>
	);
};

export default Home;
