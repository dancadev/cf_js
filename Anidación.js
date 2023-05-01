let cargo = {
    nombres: 'David Andrés',
    apellidos: 'Calvache Diaz',
    edad: 34,
    contacto: {
        email: 'dancadev@gmail.com',
        cel: '3195456882'
    },
    empresa: {
        razon_social : 'Namaco',
        direccion: 'Cra 32 # 16-41',
        telefono: '3157070561',
        fun: function(){
            return ('Esto es un mensaje dentro de la funcion')
        }
    }
}
console.log(cargo.contacto.cel)
console.log(cargo.empresa.direccion)
console.log(cargo.empresa.fun)
