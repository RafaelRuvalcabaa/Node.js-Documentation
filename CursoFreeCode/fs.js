const fs = require("fs");

// //Leer documento
// fs.readFile("notas.txt", "utf-8", (err, contenido) => {
//   if (err) {
//     throw err;
//   }
//   console.log(contenido);
// });

// //Cambiar nombre de archivo
// fs.rename("main.txt", "notas.txt", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Nombre cambiado exitosamente....");
// });

// //Agregar contenido al final de documento
// fs.appendFile("notas.txt", "\nHola my friend!", function (err) {
//   if (err) {
//     throw err;
//   }
//   console.log("Se agrego correctamente ");
// });

// //Remplazar todo el contenido del archivo.

// fs.writeFile("notas.txt", "Hola", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Cambios exitosos");

// });

// //Eliminar archivo
// fs.unlink("notas.txt", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Exitoso");
// });


// Cambiar nombre de un archivo sync. 

fs.renameSync('main.html', 'index.html') // No necesita funcion 