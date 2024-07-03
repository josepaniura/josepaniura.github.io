
import './Estilo.css'
import Listado from './Listado';
import { useState } from 'react';

function App() {
  const[contador, setContador]= useState(0);
  const[contador2, setContador2]=useState(0);
  const[color, setColor]= useState('white');
  const incrementadorContador=() =>{
    setContador(contador +1);
  }
  const incrementadorContador2 =()=>{
    setContador2(contador2 + 1);
  }
  const cambiarcolor =()=>{
    const nuevoColor = color ==='white'? 'lightblue' : 'white';
    setColor(nuevoColor);
  }
  return (
    <div>
      <center>
      <h1 className='titulo'>  Esta es mi coleccion de paisaje</h1>
      <p>Has realizado {contador} clics veces</p>
      <button  onClick={incrementadorContador}> Boton Contador</button>
      <p>Esto es la contidad del contador 2 = {contador2}</p>
      <button  onClick={incrementadorContador2}> Boton Contador2</button>
      <div style={{backgroundColor: color,padding:'20px' }}>
        este es un contenedor para probar cambiar el color de fondo usando react
        <button  onClick={cambiarcolor}> cambiar color de fondo</button>
      </div>


      </center>

      <Listado />
      <Listado />
      <Listado />
    </div>
  );
}

export default App;
