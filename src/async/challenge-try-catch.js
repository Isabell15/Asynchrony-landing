

import fetch from "node-fetch"
const API = 'https://api.escuelajs.co/api/v1'



// Declarar una funcio  fetchData asincrona
async function fetchData(ulrApi){
    // Realiza una solicitud Get a la url y espera answer
    const response = await fetch(ulrApi)
    const data = await response.json()
    return data
}


// Se declara una funcion que scepta la urlAApi como argumento
const anotherFuction = async (ulrApi) => {
    try {
        //llama a fetchDaata con la Url de producto y espera
        const products = await fetchData(`${ulrApi}/products`) 
        // Toma el primer producto y busca informacion
        const product = await fetchData(`${ulrApi}/products/${products[0].id}`)
        // Llama para obtener categoria del producto usando ID
        const category = await fetchData(`${ulrApi}/categories/${product.category.id}`)
        console.log(products)
        console.log(product.title)
        console.log(category.name)
    } catch{
        console.error(error);
    }
}

anotherFuction(API)