const { rejects } = require("assert");
const { captureRejectionSymbol } = require("events");

const carros = [{
    color: "morado",
    tipo: "minivan",
    registroDia: ("2017-01-03"),
    capacidad: 7,
  },
  {
    color: "rojo",
    tipo: "camioneta",
    registroDia: ("2018-03-03"),
    capacidad: 5,
  },];

const getDatos = () => {
  return new Promise((resolve, reject) => {
    console.log('Obteniendo datos......');
    if (carros.length === 0) {
      reject(new Error("No existen datos"));
    }
    setTimeout(() => {
      resolve(carros);
    }, 2000);
  });
};

async function feched() {
  try {

    const obtenerDatos = await getDatos();
    console.log(obtenerDatos);
    console.log('Datos obtenidos con exito.');
  } catch (error) {
    console.log(error);
  }
}

feched();
