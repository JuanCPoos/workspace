/**
 * CONTROL DE FLUJO
 */

/*if (false) {
    console.log('true dentro de un if')
}else{
    console.log('fue falso')
}*/

//CONTROL DE FLUJO IF
const edad = 5
if(edad > 5 && edad < 18) {
    console.log('edad para ingresar al juego')
} else {
    console.log('No puede ingresar al juego')
}

//CONTROL DE FLUJO WHILE
let x = 0
let almacenValor
const arrContent = []

while (x <= 5) {
    //console.log(x)
    arrContent.push(x)
    if(x == 3) almacenValor = x
    x++
}
console.log('||-------------||')
console.log(arrContent)

//CONTROL DE FLUJO SWITCH

switch(almacenValor){
    case 1:
        console.log('Caso uno ejecutado')
        break;
    case 2:
        console.log('Caso dos ejecutado')
        break;
    case 3:
        console.log('Caso tres ejecutado')
        break;
    case 4:
        console.log('Caso cuatro ejecutado')
        break;
    case 5:
        console.log('Caso cinco ejecutado')
        break;
    default:
        console.log('Caso default ejecutado')
}

// CONTROL DE FLUJO - FOR
//permite iterar o trabajar dentro de un loop, hasta cumplir una condición

const array = []
for (let i = 0; i <= 10; i++) {
    array.push(i)    
}
//console.log('Arreglo con for', array)

const arreglo= ['uno', 'dos', 'tres', 'cuatro', 'cinco']
//console.log(arreglo.length)

let n = 0;
for (let i = 0; i <= arreglo.length; i++) {
    console.log(arreglo[i])
    n++;    
    console.log('ingresa', n-1 , 'veces.  || i =', i)
}

console.log('|------------------------|')

for(let i = 0; i < arreglo.length; i++){
    console.log(i, '=', arreglo[i])

}

