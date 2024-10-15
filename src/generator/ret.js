


import fetch from 'node-fetch';

// URL base de la API a la que vamos a hacer las peticiones.
const API = 'https://api.escuelajs.co/api/v1';
const urlApi = API;

// Declaramos una función asíncrona generadora llamada fetchData que recibe un URL.
// La función realiza una petición HTTP usando fetch y devuelve el resultado en formato JSON usando 'yield'.
async function* fetchData(url) {
    const response = await fetch(url); // Espera a que la respuesta de la API llegue
    yield await response.json(); // Convierte la respuesta en un objeto JSON y lo "cede" como valor en el generador
}

// Llamamos a la función fetchData y usamos el método next para obtener el primer valor
// La respuesta de 'fetchData' es procesada dentro de la función '.then()'.
fetchData(`${urlApi}/products`).next().then(({ value, done }) => {
    // Aquí recibimos un objeto con value y done que es el indicador boolean.

    console.log(value) //  productos obtenida desde la API.

    // Extraemos el ID del primer producto de la lista devuelta.
    const idProduct = value[0].id

    // Imprimimos un mensaje con el URL para que lo copies y lo pegues en el navegador (opcional).
    console.log(`Copiame: ${urlApi}/products/${idProduct} y pegame en el navegador`)

    // Realizamos otra llamada usando el ID del producto seleccionado.
    // Llamamos nuevamente a la función fetchData para obtener detalles de un producto específico.
    fetchData(`${urlApi}/products/${idProduct}`).next().then(({ value, done }) => {
        console.log(value.title)
        // Extraemos el ID de la categoría del producto.
        const idCategory = value.category.id

        // Realizamos una tercera llamada usando el ID de la categoría obtenida.
        // Llamamos a fetchData para obtener el nombre de la categoría de ese producto.
        fetchData(`${urlApi}/categories/${idCategory}`).next().then(({ value, done }) => {


            console.log(value.name)
        })
    })
})
