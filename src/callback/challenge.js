// Se requiere el modulo xmlhttprequest para hacer solicitud http.
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
// Se coloca la url del API a la que se solicitara
const API = 'https://api.escuelajs.co/api/v1'


// FetchData tomara argumentos urlApi, callback
function fetchData(urlApi, callback) {
    // Se crea una instancia de xmlthtt...
    let xhttp = new XMLHttpRequest()

    // Se abre una solicitud http get a la url
    xhttp.open('GET', urlApi, true)
    // Se define funcion para cambiar de estado en la solicitud
    xhttp.onreadystatechange = function (event) {
        // Si el estado de la solicitud es 4 completado
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                //llamamos al callback pasando al null para indicar que no hubo error 
                callback(null, JSON.parse(xhttp.responseText))

            } else {
                const error = new Error('Error' + urlApi)
                return callback(error, null)
            }
        }
    }
    xhttp.send()
}

fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1)
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        if (error2) return console.error(error2)
        //se llama a fetchData con el fin de acceder a la categ , se envia como parametro a la url de la API con la concatenacion de categories
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1[0])
            console.log(data2.title)
            console.log(data3.name)
        })
    })
})
