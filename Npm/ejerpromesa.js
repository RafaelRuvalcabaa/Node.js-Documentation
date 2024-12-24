const estatusPedido = () => {
  return Math.random() * 100 < 50;
 
};

const miPedido = new Promise((resolve, reject) => {
  if (estatusPedido()) {
    resolve("Pedido hecho");
  } else {
    reject ("No se puedo hacer el pedido");
  }
});

miPedido.then(
  (pedido)=>{
console.log(pedido);  },
  (error)=>{
  console.log(error);
}
)

miPedido.then(
  function (pedido){
    console.log(pedido);
  },
  function (error){
    console.log(error);
  }
)