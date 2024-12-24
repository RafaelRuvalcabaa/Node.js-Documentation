import http, { createServer } from "http";

const server = createServer((req, res) => {
  console.log("---> res (Respuesta) ");
  res.setHeader('content-type', 'application/json')
  console.log(res.getHeaders());

  res.end('Hello World')
});

const puerto = 3000;
server.listen(puerto, () => {
  console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
});
