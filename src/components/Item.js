import React, { useState }  from "react";
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

function Item({id, producto, stock, myClick, theClick}) {
  const {nombre, imagen, descripcion} = producto

  const [myStock, setMyStock] = useState(stock)
  
  const decreStock = () => {
      setMyStock( myStock-1)
  } 
  
  const increStock = () => {
      setMyStock(myStock+1)
  }

  function buyClick() { myClick(); decreStock()}
  function unBuyClick() { theClick(); increStock()}

  

  return (
    <div className='producto'>
      <h3>{nombre}</h3>
      <img src={imagen} alt={id}/>
      <h5>{descripcion}</h5>
      <h5><b>En stock: </b><span className={myStock>0 ? 'texto_negro' : 'texto_rojo'}>{myStock>0 ? myStock : "agotado"}</span></h5>
      <button onClick={buyClick} disabled={myStock > 0 ? false : true}>COMPRAR</button>
      {myStock < stock && <button onClick={unBuyClick}> Descartar Compra </button>}
    </div>
  )
}

export default Item;