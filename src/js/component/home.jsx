import React from "react";
import Contador from "./contador";
import Temporizador from "./temporizador";
import Contadorregresivo from "./contadorregresivo";
import Bombilla from "./bombilla";


const Home = () => {

	return (
		<>
			<div class="container text-center mt-4">
				<div class="row align-items-start">
					<div class="col-6 bg-danger">
						<Contador />
					</div>
					<div class="col-6  bg-primary">
						<Temporizador />
					</div>

				</div>
			</div>
			<div class="container text-center mt-5">
				<div class="row align-items-start">
					<div class="col-6 bg-primary">
						<Contadorregresivo />
					</div>
					<div class="col-6 bg-danger">
						<Bombilla />
					</div>

				</div>
			</div>

		</>
	);
};

export default Home;
