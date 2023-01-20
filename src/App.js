import './App.css';
import freeCodeCampLogo from './Images/logo.png'
import Button from './Components/button';
import Contador from './Components/contador';
import { useState } from 'react';

function App() {

	const [numClicks, setNumClicks] = useState(0);

	const manejarClick = () =>{
		setNumClicks(numClicks + 1);
	};

	const reiniciarContador = () =>{
		setNumClicks(0);
	};

	return (
		<div className="App">
			<div className='freecodecamp-logo-contenedor'>
				<img className='freecodecamp-logo'
					src={freeCodeCampLogo}
					alt = 'Logo de freecodecamp'
				/>
			</div>
			
			<div className='contenedor-principal'>
				<Contador numClicks={numClicks} />
				<Button 
					texto="Click"
					esBotonDeClick={true}
					manejarClick={manejarClick}
				/>
				<Button 
					texto="Reiniciar"
					esBotonDeClick={false}
					manejarClick={reiniciarContador}
				/>	
			</div>
		</div>
	);
}

export default App;
