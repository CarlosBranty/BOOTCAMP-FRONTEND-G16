function nombreDelaFuncion(){
    console.log("hola a todos" )
}
nombreDelaFuncion();

/* Funcviones con parametros  */
function suma(numer1, numero2){
    console.log(numer1 + numero2)
}
suma(4, 6)

function multplicacion(numero1, numero2){
    return numero1 * numero2;
}
const resultadoDemultiplicacion = multplicacion(5,6)
console.log(resultadoDemultiplicacion)

function resta(numero1, numero2){
    return numero1 - numero2;
}
const resultadoResta = resta(10, 3)
console.log(resultadoResta);

/* Arrow functions */

//Funciones sin parametros
const imprimiendoSaludo = ()=> console.log('hola que tal que hace perro')
imprimiendoSaludo();

//Funciones con parametros arrow functions
const sumaArrow = (numero1, numero2)=> console.log( numero1 + numero2);
sumaArrow(104, 101.99)

const multiplicacionArrow = (numero1, numero2) => numero1 * numero2

console.log(multiplicacionArrow(4,9))
// funciones sin parametros en multiples lineas
const saludoEnMayusculas = (nombre) =>{
    const nombreEnMayus = nombre.toUpperCase()

    return 'hola ' +  nombreEnMayus + '!'
}

console.log(saludoEnMayusculas('jose'))

// Funciones con parametros por defgectop con retorno y en multiples lineas

const otroSaludoConParametorsPorDefecto = (nombre = 'Anonimo') =>{
    const nombreEnMayusculas = nombre.toUpperCase()
    return 'Hola que tal ' + nombreEnMayusculas + '!'
}