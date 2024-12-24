// Función que toma otra función como argumento
function procesarUsuario(nombre, callback) {
    console.log(`Procesando usuario: ${nombre}`);
    // Ejecuta la función callback
    callback(nombre);
}

// Función que se usará como callback
function saludarUsuario(nombre) {
    console.log(`Hola, ${nombre}!`);
}

// Usamos procesarUsuario y pasamos saludarUsuario como callback
procesarUsuario("Rafael", saludarUsuario);

// Output:
// Procesando usuario: Rafaek
// Hola, Rafael!
