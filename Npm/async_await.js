function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando ${producto} de Store (Espere respuesta).....`);
    setTimeout(() => {
      if (producto === "taza") {
        resolve("Ordenando una taza con el logo de FreeCodeCamp");
      } else {
        reject("Ese producto no esta disponible");
      }
    }, 2200);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve, reject) => {
    console.log("Procesando respuesta.......");
    console.log(`La respuesta fue, "${respuesta}"`);
    setTimeout(() => {
      resolve("Gracias por tu compra");
    }, 4000);
  });
}

// ordenarProducto('taza')
// .then(respuesta =>{
//     console.log(`Respuesta recibida`);
//     console.log(respuesta);
//     return procesarPedido(respuesta)
// })
// .then(respuestaProcesada=>{
//     console.log(respuestaProcesada);
// })
// .catch(error=>{
//     console.log(error);
// })

async function realizarPedido(producto){
    try{
        const respuesta = await ordenarProducto(producto)
    console.log("Respuesta recibida");
    const respuestaProcesada = await procesarPedido(respuesta)
    console.log(respuesta);
    }
    catch(error){
            console.log(error);
        }
}

realizarPedido('taza')