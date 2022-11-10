searchPhrase()


const todoList = new TaskList();


// recibimos las referencias de los campos desde el html
const divTodoList = document.querySelector('.todo-list');
const txtImput   = document.querySelector('.new-todo');
const btnBorrar   = document.querySelector('.clear-completed');



/* creamos la funcion para insertar las tareas al HTML usando backstick para crear multilineas
e insertamos la tarea creada en el HTML use el operador ternario para evaluar las propiedades 
activas del todo */

const crearTodoHtml = (todo) => {
    const htmlTodo = `
            <li class="${  (todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
                <div class="view">
                <input class="toggle" type="checkbox" ${ (todo.completado) ? 'cheked' : ''}>
                <label>${ todo.tarea }</label>
                <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
                </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
        divTodoList.append(div.firstElementChild);
        return div.firstElementChild;
}


//evento para detectar cuando se ingresa una nueva tarea
txtImput.addEventListener('keyup', (event) => {
    if ( event.keyCode === 13 && txtImput.value.length > 0) {       
        const nuevoTodo = new Task ( txtImput.value );
        todoList.nuevoTodo( nuevoTodo );
        crearTodoHtml(nuevoTodo);
        txtImput.value = '';      
    }
});

//evento para marcar tareas completadas
divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    if ( nombreElemento.includes('input'))  {
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed')
    } else if( nombreElemento.includes ('button')) {
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento)
    }
});

btnBorrar.addEventListener('click', () => {
        todoList.eliminarCompletados();
        for ( let i = divTodoList.children.length-1; i >=0; i--){
            const elemento = divTodoList.children[i];
            if(elemento.classList.contains('completed')) {
                divTodoList.removeChild(elemento);
            }
        }
});






