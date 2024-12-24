const http = require("http");

const cursos = require("../cursos");
const servidor = http.createServer((res, req) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return manejarSolicitudGET(res, req);
    default:
      console.log(
        `El metodo usado no puede ser manejado por el servidor: ${method}`
      );
  }
});

function manejarSolicitudGET(res, req) {
  const path = req.url;
  if (path === "/") {
    res.statusCode = 200;
    res.end("Bienvenido a mi primer servidor y API creados con Node.js");
  } else if (path === "/cursos") {
    res.statusCode = 200;
    res.end(JSON.stringify(cursos.infoCursos));
  }
}
const PUERTO = 3000;
servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});
