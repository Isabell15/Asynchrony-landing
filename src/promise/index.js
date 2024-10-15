

// Crear una promesa que se resuelve inmediatamente con el valor 'hey!'
const promise = new Promise(function (resolve, reject) {
    resolve('hey!')
})

//conejo constante
const rabbit = 15

// Crear una promesa que verifica si hay más de 10 conejo en el bosque
const countRabbit = new Promise(function (resolve, reject) {
    if (rabbit > 10) {
        // Si hay más de 10 conejo, resolver la promesa con un mensaje
        resolve(`We have ${rabbit} rabbit on the forest`)
    } else {
        // Si hay 10 o menos conejo, rechazar la promesa con un mensaje de error
        reject("There are no rabbit on the forest")
    }
})

// Se encarga de la promesa 
countRabbit.then((result) => {
        // Si la promesa se resuelve
        console.log(result)
    })
    .catch((error) => {
        // Si la promesa es rechazada
        console.log(error);
    })
    .finally(() => {
        console.log('Finally');
    });