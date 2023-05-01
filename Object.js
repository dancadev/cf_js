const monitor = {
    marca:"janus",
    color:"negro",
    tamaño:23,
    respuesta:"5ms",
    formato:[1,2,3,'cuatro']
}
console.log(monitor.marca)
console.log(monitor.formato)
monitor.tamaño = "24``"
console.log(monitor.tamaño)
console.log(monitor)

//se puede crtear de la siguiente manera:

let objeto = {color:'Rojo'}
let otroObjeto = new Object({color:'Verde'})
console.log(otroObjeto.color)