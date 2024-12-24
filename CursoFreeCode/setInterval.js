// setInterval(function, intervalo, arg1, arg2)

function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
  }

  setInterval(mostrarTema, 1000, 'Nodejs')


  function sumar(a,b){
    console.log(a+b);
  }

  setInterval(sumar, 1000,5,6)