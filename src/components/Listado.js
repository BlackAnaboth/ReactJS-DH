import React from 'react'
import lista from './data.json'
import Item from './Item';

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

function Listado({funcionI, funcionD}) {

  return (
    <div className='container'>
      {lista.map((e) => <Item key={e.id}{...e} myClick={funcionI} theClick={funcionD}/>)}

    </div>
  )
}

export default Listado;