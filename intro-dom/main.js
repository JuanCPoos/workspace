/**
 * windows.onload se utiliza para esperar que la página 
 * cargue completamente (el DOM) y el luego corre el script. Podemos también cargar en HTML
 * el script luego de cerrar la etiqueta body, y en el archivo .js escribir la funcion window.onload
 * de este modo nos aseguramos que primero se encuentre cargado el dom y luego corra el archivo .js
 */
 window.onload = () =>{
    const valorString = document.getElementById('text')
    valorString.innerText = 'Elemento actualizado' 

    const valString = document.getElementById('textDos')
    valString.innerHTML = '<li>Elemento 1</li> <li>Elemento 2</li>' 

}
