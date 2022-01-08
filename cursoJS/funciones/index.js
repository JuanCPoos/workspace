function iterar (arg1) {
        
    for(let i = 0; i < arg1.length; i++){
        console.log(i, '=', arg1[i])
        if(i == arg1.length - 1)    
            console.log('---------------')
    }
}

const array = ['uno', 'dos', 'tres', 'cuatro', 'cinco']
const array2 = [12, 14, 16, 354, 76, 324, 56]
//iterar(array)
//iterar(array2)

function suma (a, b) {    
    return a + b
}

const resultSuma = suma(50, 10)
const resultSuma2 = suma(5, 3)

console.log('resultado:', resultSuma)
console.log('resultado suma 2:', resultSuma2)
console.log(resultSuma + resultSuma2)

/**
 *  CALLBACKS - es una función que se ejecuta al final de otra. 
 */

/*function sumar(a, b, cb){ //cb = callback
    const result = a + b
    cb(result)
} 

function callback(result){
    console.log('resultado:', result)
}

//callback(6)
sumar(2, 4, callback) /**si yo en este caso paso la funcion callback() con paéntesis la estaría ejecutando
                        por eso se escriben los paréntesis finales. Sencillamente pasamos su referencia
                        a la función sumar*/
                     
/*
*las funciones en javascript son valores, por eso podemos pasarlas como argumentos a otras funciones
y de esta manera componer comportamiento en nuestro codigo. 
*/

// FAT ARROW FUNCTION 

const miFatArrowFunction = (argumento1, argumento2) => argumento1 + argumento2 //en esta linea tenemos un return impliíito 

//console.log('resultado:', r)
const otraFAF = (a, b) => {
    return a + b
}

const r = otraFAF(2, 4)
console.log(r)