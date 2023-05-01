let carro1 ={marca:'renault', modelo:'98'}
let carro2 ={marca:'renault', modelo:'98'}
console.log(carro1 === carro2) //false
console.log(carro1.marca === carro2.marca) //true
let carro3 = carro2
console.log(carro3 === carro2) //true porque si apunta a la misma referencia