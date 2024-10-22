// Importar la librería  para hacer peticiones HTTP
import fetch from 'node-fetch';

// Definir la URL base de la API
const API = 'https://api.escuelajs.co/api/v1';

// Función que recibe una URL y retorna el llamado de fetch, lo que genera una promesa
function fetchData(urlApi) {
    return fetch(urlApi);
}

// Llamar a la función fetchData con la URL de productos
// fetchData(`${API}/products`)
//     .then(response => response.json()) // Convertir la respuesta a formato JSON
//     .then(products => {
//         console.log(products); // Imprimir los productos obtenidos
//     })
//     .then(() => {
//         console.log('HELLOOO'); // Ejemplo de un segundo then
//     })
//     .catch(error => console.log(error)); 



fetchData(`${API}/products`)
    .then(response => response.json()) //se hace la conversión a un objeto json
    .then(products => {
        console.log(products)
        return fetchData(`${API}/products/${products[0].id}`) // solo se quiere mostrar el primer elemento de la primera solicitud
    })
    .then(response => response.json()) //se vuelve traer la data
    .then(product => {
        console.log(product.title)
        return fetchData(`${API}/categories/${product.category.id}`) //se quiere mostrar la categoria de un producto en particular
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name)
    })
    .catch(err => console.log(err)) //detectar un error
    .finally(() => console.log('Finally')) //es opcional para mostrar que se terminó la solicitud