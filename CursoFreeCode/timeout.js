function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
  }
  
  setTimeout(mostrarTema, 5000, 'NodeJs') // En milisegundos

  function sumar( a,b){
    console.log(a+b);
  }
  
  setTimeout(sumar, 3000, 10,4)