const promesaCumplida = true;

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve("Promesa cumplida");
    } else {
      reject("Promesa rechazada");
    }
  }, 1000); 
});

miPromesa.then(
  (result) => {
    console.log(result); // "Promesa resuelta"
  },
  (error) => {
    console.error(error); // No se ejecutará en este caso
  }
);

class Fecha {
  constructor(dia) {
    this.dia = dia; // Asigna el día al objeto
  }

  mostrar() {
    return `Hoy es ${this.dia}`; // Método que retorna el día
  }
}

const mostrarDia = new Fecha("Lunes");
console.log(mostrarDia.mostrar()); // Imprime "Es: Lunes"
