const estatusPedido = () => {
    return Math.random() * 100 < 50;
   
  };
  
  const miPedido = new Promise((resolve, reject) => {
    if (estatusPedido()) {
      resolve("Pedido hecho");
    } else {
      reject ("no se puedo hacer el pedido!");
    }
  });
  
  miPedido.then(
    (pedido)=>{
  console.log(pedido);  },
  ).catch(
    (error)=> {
        console.error(`Hubo un error, ${error}`)
    }
  )
  
 