import React from "react";
import Contador from "./contador";
import Temporizador from "./temporizador";
import Contadorregresivo from "./contadorregresivo";
import Bombilla from "./bombilla";
import ListadoPersonas from "./listadopersonas";
import Semaforo from "./semaforo";
import Pokemon from "./pokemon";
import Listadousuariosapi from "./listadousuariosapi";



const Home = () => {

	return (
		<>
			<div className="container text-center mt-4">
				<div className="row align-items-start">
					<div className="col-6 bg-info" style={{borderRadius: 10, padding: 20}}>
						<Contador />
					</div>
					<div className="col-6  bg-warning" style={{borderRadius: 10, padding: 20}}>
						<Temporizador />
					</div>

				</div>
			</div>
			<div className="container text-center mt-5">
				<div className="row align-items-start">
					<div className="col-6 bg-warning" style={{borderRadius: 10, padding: 20}}>
						<Contadorregresivo />
					</div>
					<div className="col-6 bg-info" style={{borderRadius: 10, padding: 20}}>
						<Bombilla />
					</div>

				</div>
			</div>
			<div className="container text-center mt-5">
				<div className="row align-items-start">
					<div className="col-6 bg-warning" style={{borderRadius: 10, padding: 20}}>
						<ListadoPersonas />
					</div>
					<div className="col-6 bg-info" style={{borderRadius: 10, padding: 20}}>
						<Semaforo />
					</div>

				</div>
			</div>
			<div className="container text-center mt-5">
				<div className="row align-items-start">
					<div className="col-6 bg-info" style={{borderRadius: 10, padding: 20}}>
						<Pokemon />
					</div>
					<div className="col-6 bg-warning" style={{borderRadius: 10, padding: 20}}>
						<Listadousuariosapi />
					</div>

				</div>
			</div>

		</>
	);
};

export default Home;
