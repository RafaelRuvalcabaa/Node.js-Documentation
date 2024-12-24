const http = require ('http');

const servidor = http.createServer((req,res)=>{
  res.end('Servidor funcionando')

}); 

servidor.listen(3000, ()=>{
  console.log('El servidor esta funcionando....');
})