const EventEmitter = require("events");

const emisorProdutcos = new EventEmitter();

emisorProdutcos.on("compra", (total, numProdutos) => {
  console.log(`Se realizo la compra por $${total}.`);
  console.log(`Numero total de productos: ${numProdutos}.`);
});

emisorProdutcos.emit("compra", 100, 5);

   