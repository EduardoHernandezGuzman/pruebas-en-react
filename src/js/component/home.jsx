import React from "react";
import Contador from "./contador";
import Temporizador from "./temporizador";
import Contadorregresivo from "./contadorregresivo";
import Bombilla from "./bombilla";
import ListadoPersonas from "./listadopersonas";
import Semaforo from "./semaforo";


const Home = () => {

	return (
		<>
			<div class="container text-center mt-4">
				<div class="row align-items-start">
					<div class="col-6 bg-info" style={{borderRadius: 10, padding: 20}}>
						<Contador />
					</div>
					<div class="col-6  bg-warning" style={{borderRadius: 10, padding: 20}}>
						<Temporizador />
					</div>

				</div>
			</div>
			<div class="container text-center mt-5">
				<div class="row align-items-start">
					<div class="col-6 bg-warning" style={{borderRadius: 10, padding: 20}}>
						<Contadorregresivo />
					</div>
					<div class="col-6 bg-info" style={{borderRadius: 10, padding: 20}}>
						<Bombilla />
					</div>

				</div>
			</div>
			<div class="container text-center mt-5">
				<div class="row align-items-start">
					<div class="col-6 bg-warning" style={{borderRadius: 10, padding: 20}}>
						<ListadoPersonas />
					</div>
					<div class="col-6 bg-info" style={{borderRadius: 10, padding: 20}}>
						<Semaforo />
					</div>

				</div>
			</div>

		</>
	);
};

export default Home;
