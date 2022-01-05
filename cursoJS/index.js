console.log('Hola Mundo')


/**
 * TIPOS DE DATOS EN JS
Dato 1 => String: cadena de caracteres  'a' - 'hola mundo' "a" - "hola mundo" Comillas simples o dobles es lo mismo
Dato 2 => Boolean: true / false
Dato 3 => Null: nulo (variable vacia, vació) 
Dato 4 => Number: cualquier numero a escribir dentro de JS: 123456 777 8964 2482 00 
    "123" es distinto de 123 porque el primero entre comillas es un string, en cambio el otro sin comillas, es un 
    dato tipo Number
Dato 5 => Undefined: no se encuentra definido. A diferencia de Null, que se encuentra definido, pero con valor nulo o vació
Undefined; no se encuentra definido. 
Dato 6 => Object: es un objeto, puede combinar cualquiera de estos datos. 
 */



/**
 * VARIABLES
 * var - let - const
 * var : se define en el inicio del archivo. Tratarmeos de evitar su uso
 * let : indica a JS que vamos a crear una variable sin necesidad de saber que valor contiene 
 */

//var miPrimerVariable = 'lala' 

let miPrimerVariable = 'Mi primera variable let!'
console.log(miPrimerVariable)

//mutabilidad : 
miPrimerVariable = 'Esto ha cambiado'
console.log(miPrimerVariable)

//boolean
let miBoolean = true
let miOtroBoolean = false

let miNumero = 0
let miNumero2 = 12
let miNumero3 = -258

console.log(miNumero, miNumero2, miNumero3, miBoolean, miOtroBoolean)
let undef 
console.log(undef)

let nulo = null
console.log('nulo:', miNumero2, nulo)