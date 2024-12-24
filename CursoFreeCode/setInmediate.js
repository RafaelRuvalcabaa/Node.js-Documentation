// setInmediate(function, argumento1,argumento2)
// Se ejecita despues del codigo sincrono.

function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}
console.log("Antes del setInmediate");

setImmediate(mostrarTema, "NodeJs");

console.log("Despues del setInmediate");