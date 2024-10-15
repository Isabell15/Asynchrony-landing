function execCallback(callback) {
    //utilizamos setTimeout para ejecutar el callback 
    setTimeout(() => {


        callback()
    }, 2000)
}

//definir la funcion callback
function myFunc() {
    console.log('log after 2s')
}
//llamamos a execallback y le pasamos a myFunc
execCallback(myFunc)