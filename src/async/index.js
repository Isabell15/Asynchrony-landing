

// Creamos una funcion que retorna la promesa
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        // se usa setTimeout para simular la operacion asincronica
            ? setTimeout(()=> resolve('Async!!'), 2000)
            : reject(new Error('Error!'));
    })
}

// Creamos nuesta Función Asincrona
const anotherFn = async () => {
    // Se usa await para esperar que fnAsync se resuelva
    const somethig = await fnAsync();
    console.log(somethig);
    console.log('Hello People!')
}

console.log ('Before'); // se imprime ante de que la promesa se resuelva
anotherFn();            // se llama a la funcion asincronica 
console.log('After')  // se imprime despues de before