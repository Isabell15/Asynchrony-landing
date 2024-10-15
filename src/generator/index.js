

// declara una funcion generadora llamada gen 
function* gen() {
    yield 1 //la primera llamada next devolvera1
    yield 2
    yield 3
}

// se crea una instancia del gnerador gen
const g = gen()
console.log(g.next().value) // llamada next en el generator muestra1
console.log(g.next().value)
console.log(g.next().value)
//con la propiedad .netx se van recorriendo los yield por lo que en cada ocasión nos da un valor diferente

function* iterate(array) {
    for (let value of array) {
        yield value
    }
}
// Se crea una instancia que pasara por los arreglos
const it = iterate(['Pelota', 'Bate', 'Gorra', 'Bolsa', 'Almohada'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)  //como no hay siguiente valor arroja undefined