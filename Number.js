//entero
let num = 25
console.log(num)

let num2 = 25.5
console.log(num2)

let numH = 0x1f
console.log(numH)

let numhd = 0xff
console.log(numhd)

let numde = 0x7de
console.log(numde)

let numcf = 5.4e2
console.log(numcf)

//funciones de number

//parseint()
/*
Devuelve el numero decimal equivalente al string*/

console.log(parseInt('1111'))
console.log(parseInt('2222',16))//16: base lo transforma en el valor correspondiente en esa base

//parsefloat

console.log(parseFloat('158.4'))
console.log(parseFloat('5e8'))

//numbertofixed(x): devulve un string con elv alor del numero number  redondeado al alza con los decimales que indica x

let n = 14.25687
console.log(n)
console.log(n.toFixed(3))
console.log(n.toFixed(2))
console.log(n.toFixed(1))

//numer.toExponential(x): devuleve un string redonbdeando la base a x decimales

let d = 6.8755
console.log(d.toExponential(2))

//number.toString(base)
console.log(d.toString(10))
console.log(d.toString(2))