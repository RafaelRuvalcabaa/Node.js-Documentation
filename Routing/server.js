const http = require("http");
const cursos = require("./cursos");

const servidor = http.createServer((req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return manejarSolicitudGET(req, res);
    // case "POST":
    //   return manejarPOST(req, res);
    // case "DELETE":
    //   return manejarDelete(req, res);
    default:
      // res.statusCode = 501
      // res.end(
      //   `El metodo usado no puede ser manejado por el servidor: ${method}`
      // );
  }
});

// function manejarSolicitudGET(req, res) {
 
//   const path = req.url;
//   if (path === "/") {
//     res.statusCode = 200;
//     res.end("Bienvenido a mi primer servidor y API creados con Node.js");
//   } else if (path === "/cursos") {
//     res.statusCode = 200;
//     res.end(JSON.stringify(cursos.infoCursos));
//   } else if (path === "/cursos/programacion") {
//     res.statusCode = 200;
//     res.end(JSON.stringify(cursos.infoCursos.programacion));
//   }
//   res.statusCode = 404;
//   // Respuesta finalizada y msg
//   res.end("El recurso no existe.....");
// }

// function manejarPOST(req, res) {
//   const path = req.url;
//   if (path === "/cursos/programacion") {
//     res.statusCode = 200;
//     res.end("El servidor recibido una solicitud POST para cursos/programacion");
//   }
// }

// function manejarPUT(req, res) {
//   const path = req.url;
//   if (path === "/cursos/matematicas") {
//     res.statusCode = 200;
//     res.end("El servidor agrego y/o remplazo los datos");
//   }
// }

// function manejarDelete(req, res) {
//   const path = req.url;
//   if (path === "/cursos") {
//     res.statusCode = 200;
//     res.end('El servidor elimino los cursos')
//   }
// }

const PUERTO = 3000;
servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});
