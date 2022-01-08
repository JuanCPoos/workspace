const todos = []

window.onload = () => {

        const form = document.getElementById('todo-form')
         /*
            *al hacer clic en el botón enviar con el evento onsubmit capturamos 
            la referencia del id=todo y pasamos el elemento a la constante todo, 
            luego pasamos el valor (value) de la const todo a la constante todoText,
            y ahora reemplazamos el value de la variable todo por un string vacio 
            para que en el input html aparezca vacio.
        */
        form.onsubmit = (e) => {
            e.preventDefault() //previene el evento de actualizar la página
            const todo = document.getElementById('todo')
            const todoText =  todo.value           
            todo.value = ''
            todos.push(todoText)
            
            const todoList = document.getElementById('todo-list')
            todoList.innerHTML = ''
            for (let i = 0; i < todos.length; i++) {
                todoList.innerHTML += '<li>'+ todos[i] + '</li>'
            }    
            
            
            
        }
           
        
         
        
        


}