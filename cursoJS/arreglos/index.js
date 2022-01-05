
let compras = {
    termo: 1,
    mate: 1,
    bombillas: 10, 
}


/**
 * definiremos una rreglo vació. Los arreglos pueden contener elementos de cualquier tipo dentro
 */
const arr = []

const arreglo = [1, 2, 'hola', 'mundo', compras]
//este arreglo contiene los siguientes elementos: dos numeros, dos string y un objeto 'Compras'

console.log(arr)
console.log(arreglo[2])
console.log(compras.bombillas)

/**
 * agregar elementos al arreglo con el método empujar (push)
 */

arr.push(5)
console.log(arr)
arr.push(compras.bombillas) /**ya agregamos el valor primitivo 5, luego pasamos el valor de la
propiedad bombillas del objeto compras.  */ 
console.log(arr)

/**
 * LISTAS - Subconjunto de array (arreglos) En las listas los tipos de datos tienen que ser iguales
 * a diferencias de los array, donde puede contener distintos tipos.
 */

const lista =  ['mate', 'bombillas', 'termos'] 
const array = ['mate', 'bombillas', 'termos', 10, 100, 10]

console.log('Lista:', lista, ' |  Arreglo:', arreglo)

/**Suma y asigna | lo mismo se puede hacer con la resta*/
let numCreccendo = 5
numCreccendo++
console.log(numCreccendo)

numCreccendo += 5
console.log(numCreccendo)