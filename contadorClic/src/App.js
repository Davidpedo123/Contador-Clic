import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import Imagen from './imagenes/im.jpeg';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (

    <div className='App'
      style={{ backgroundImage: `url(${Imagen})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <h1 className='Click'>Contador de Click</h1>
      <div className='contenedor-principal'>

        <Contador numClics={numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;