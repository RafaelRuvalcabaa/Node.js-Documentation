import http, { createServer } from "http";

const server = createServer((req, res) => {
  console.log("---> req (Solicitud) ");
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  res.end('Hello World')
});

const puerto = 3000;
server.listen(puerto, () => {
  console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
});
