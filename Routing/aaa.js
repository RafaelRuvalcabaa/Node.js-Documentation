const http = require("http");


const servidor = http.createServer((req, res) => {
    res.end("Hello world")
})

servidor.listen(3000, ()=>{
    console.log('Funcionando');
})