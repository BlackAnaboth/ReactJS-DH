import React from 'react'

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

function Cabecera(props) {
  
  return (
    <header>
        <h1>{props.titulo}</h1>
        <p>
          {props.comprados} <span>{props.contar}</span>
        </p>
    </header>
  )
}

export default Cabecera;
