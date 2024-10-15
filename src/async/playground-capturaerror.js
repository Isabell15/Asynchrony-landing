

const url = 'https://domain-api-com';
//llamamos a la api
const anotherFunction2 = async (urlApi) => {
    try {
        //Llama a la funcion fetchData pasando la url como argument
        const example = await fetchData(`${urlApi}`);
        console.log(example)

    } catch {//captura el error
        throw new Error('API Not Found')
    }

}
anotherFunction2(url)
