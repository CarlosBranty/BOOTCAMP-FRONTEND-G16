console.log('Hola mundo desde el index')

//Este es un comentario en una linea

/* Este es un comentario
de varias lineas */

//tipos de datos

/* Primitivos:
Number, String, Boolean(true, false), undefined */

//Variable de tipo Number
const numero1 = 20;
const numero2 = 30.20;
const numero3 = -40;

console.log(numero1);
console.log(numero2);
console.log(numero3);

console.log(typeof numero1);
console.log(typeof numero2);
console.log(typeof numero3);

//String
const alumna = 'Claudia';
const alumno = 'Marco';

console.log(alumna, typeof alumna);

//boolean ==> true or false
const tieneDescuento = true;

console.log(tieneDescuento, typeof tieneDescuento);
//undefined
let nombre;

console.log(nombre, typeof nombre);

//null tipo de dato ==> object
let apellido = null;

console.log(apellido, typeof apellido);

//function
//BigInt
//symbol


//VARIABLES Y CONSTANTES

//ECMASCRIPT 6 === ES6

//const ==> EC6 * *(el uso de const es lo recomendado)

// * no podemos reasignar su valor
const edad = 55;
const _edad = 25;
const edadDemiHijo = 15;
//edad = 33 // uncaught TypeError : Assighment to constat variable
console.log(edad);

//let ==> ES6 (El uso de let es lo recomendado)

// * Si podemos reasignar su valor
let edad2 = 35;
edad2 = 36;
edad2 = 22;
console.log("edad2",edad2, typeof edad2);
edad2 = "Hola";
console.log("edad2",edad2 ,typeof edad2);

//operadores matematicos
console.log(3+2);
console.log(3-2);
console.log(3*2);
console.log(3/2);
console.log(1%2); // para obetener el residuo de una division
console.log(3 ** 3); // dice que va elevado al cubo

// operadores de asignación
const genero = 'femenino';
console.log(genero + '*');

// operadores de comparación

// operadores de igualdad y desigualdad NO estricta
//devuelven un valor booleano (true or false)
console.log(-1 == 1); // false
console.log(1 == "1");
console.log(1 != 1);

// operadores de igualdad y desigualdad estricta (ES RECOMENDABLE USARLO CASI SIEMPRE)
// devuelve un valor booleano
// este operdor si toma en cuenta el tipo de dato al comparar sus valores
console.log(1 === 1); // true
console.log(1==='1');  // false por que no puede igualar con un string al ser de tipo estricto
console.log(1!== 1); // false

//otros operadores de comparacion siempre devuelven un booleano
console.log(8>5);
console.log(8<5);
console.log(8>=5);
console.log(8<=5);

//operadores lógicos (and or negacion)
console.log(true && false)//and
console.log(true || false) // or
console.log(!true)//negacion

//operador de cadena (concatenacion)
// const saludo = 'hola'
// const nopmbreCompleto = 'Carlos' + '' + 'Branty';
// const miEdad = 37;

// const nombreCompleto2 = saludo + nombreCompleto + 'Tengo' + miEdad + 'años';
// console.log(nombreCompleto2);

//ejercicios

//1. Retorna true si dos string tienen la misma longitud si no devolver false

const cadena1 = 'codigo';
const cadena2 = 'cadaga';

console.log(cadena1.length);
console.log(cadena2.length);

console.log(cadena1.length === cadena2.length)// true

//2. Retornar true si un numero es menor que 40 si no  devolver false

const numero111 = 34;

console.log(numero111<40) // true

//3.Retornar true si un numero es menor que 60 si no devolver fase

const numeroC1 = 40;
console.log(numeroC1 <60);

//4.

const numeroC2 = 40
console.log(numeroC2%2 ===0)

//5.

const numeroC3 = 40
console.log(numeroC2%2 !=0)

// 6.

const base = 6
const altura = 7
const mult= base * altura

console.log(mult/2)

//7. almacenar en una constante un  numero de 3 cifras y mostrar la suma de sus cifras elevada al cubo
const numeroC4 = 192;

const numeroC5 = numeroC4.toString();

const n1 = parseInt(numeroC5[0]);
const n2 = parseInt(numeroC5[1]);
const n3 = parseInt(numeroC5[2]);
const Resultado = (n1+n2+n3) ** 3;

console.log('El resultado es: ',Resultado);

/*8. Almacenar en una constante un monto de dinero luego mostrar cuanto le toca
A cada socio segun la siguiente Tabla:
Socio A = 30%
Socio B = 10% (Cambio para que sume 100%)
Socio C = 60% */

const DineroTotal = 1000;

const SocioA = DineroTotal * 0.3;
console.log('El Socio A tiene: S/',SocioA);
const SocioB = DineroTotal * 0.1;
console.log('El Socio B tiene: S/',SocioB);
const SocioC = DineroTotal * 0.6;
console.log('El Socio C tiene: S/',SocioC);

//CONDICIONALES
numero =40
const esPar = numero%2 ===0

if(esPar){
    console.log('Este numero es par')
}
else{
    console.log('Este numero es impar')
}
// mas condicionales
if(true){

}
else if(false){

}
else{

}

//ejemplo

const heroe = 'Spiderman'

if(heroe === 'Batman'){
    console.log('Hola soy Bruce')
}
else if (heroe === 'Spiderman'){
    console.log('Hola soy Peter Parker')
}
else if (heroe === 'IronMan'){
    console.log('Hola soy Tony')
}
else{
    console.log('No soy un heroe')
}

//CONDICIONAL (SWITCH)
switch(heroe){
        case 'Batman':
        console.log('Hola soy Bruce')
        break;
    
        case 'Spiderman':
        console.log('Hola soy Peter Parker')
        break;

        case 'Ironman':
        console.log('Hola soy Tony')
        break;

        default:
            console.log('No soy un heroe aun')
}

//ESTRUCTURAS REPETITIVAS

//FOR
for(let i = 0; i<10; i++){
    console.log(i)
}

//while
let j =0;

while(j<10){
    console.log(j);
    j=j+1
}

//do while
let k =0;

do{
    console.log(k);
    k=k+1
} while (k<10)

//EJERCICIOS

//1.Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 
//Mayor de edad o menjor de edad

const EdadPersona = 37
if(EdadPersona>= 18){
    console.log('mayor de edad')
}else{
    console.log('Es menor de edad')
}
/*2. Retornar un saludo en trediferentes lenguajes:
    -Si es español mostrara Hola
    -Si es ingles mostrara hello
    -Si es aimara mostrara kamisaraki*/

const lenguaje = 'español';
if(lenguaje === 'español'){
 console.log('Hola')
}
else if(lenguaje === 'ingles'){
    console.log('hello')
}
else{
    console.log('kamisaraki')
}

/*3. Si un numer es divisible entre 3 y 5 devolver 'fizzbuzz'
si un numero es divisible entre 3 devolver fizz
Si un numero es divisible entre 5 devolver buzz
De lo contrario devolver el mismo numero */

const NumeroFizzBuzz = 30;

if(NumeroFizzBuzz%3 ===0 && NumeroFizzBuzz%5 ===0){
    console.log('FizzBuzz')
}
else if(NumeroFizzBuzz%3 === 0 ){
    console.log('Fizz')
}
else if( NumeroFizzBuzz%5 ===0){
    console.log('Buzz')
}
else {
    console.log(NumeroFizzBuzz)
}

/*4. Retornar true si  un numero es primo si no devolver false 
pista : un numero primo es divisible por si mismo y por 1 */

const numeroPrimo = 13;

if(numeroPrimo%1 ===0 && numeroPrimo%numeroPrimo ===0){
    console.log('El resultado es verdadero')
}

/* Devolver un valor que se incremente en dos en dos y devuelva los menores a 10 */

for (let i = 0; i < 10; i += 2) {
    console.log(i)
}


//FUNCIONES

//definiendo una funcion
function nombreDelaFunction (){
    //curpor de la funcion y aqui va la logica a ejecutar
}

//funcion sin parametros
function imprimirMiNombre (){
    console.log('hola Soy Carlos')
    console.log('Soy FullStack')
}
imprimirMiNombre();

//FUNCIONES CON PARAMETROS
function imprimirUnNombre(nombre){
    console.log('Hola soy: ' + nombre)
}
imprimirUnNombre('Carlos');

function imprimirNombreyApellido (nombre, apellido, edad){
    // console.log("Hola Soy: " + nombre + ' ' + apellido + ' y tengo : ' + edad + ' años')

    console.log(`Hola soy ${nombre} ${apellido} y tengo ${edad} años`)
}

imprimirNombreyApellido('Carlos', 'Conza', 28);

/* Ejercicios */
/*1. Usando funciones determinar si la edad de un a persona es mayor
o menor de edad mostrando matode edad o menor de edad */

function esMayoroMenorDeEdad(edad){
    if(edad>=18){
        console.log('Es mayor de edad')
    }
    else{
        console.log('Es menor de Edad')
    }
}
esMayoroMenorDeEdad(18);
esMayoroMenorDeEdad(8);
esMayoroMenorDeEdad(180);

/* Funciones con retorno */
function esMayoroMenorDeEdadConRetorno(edad){
    if(edad>=18){
        return'Es mayor de edad'
    }
    else{
        return'Es menor de Edad'
    }
}

console.log(esMayoroMenorDeEdadConRetorno(25))

