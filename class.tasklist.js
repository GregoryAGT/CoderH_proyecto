class TaskList {
    constructor(){ 
       this.todos = [];
      this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }
    eliminarTodo(id){
      this.todos = this.todos.filter( todo => todo.id != id)
      this.guardarLocalStorage();
    }
    marcarCompletado(id){
        for( const todo of this.todos) {
            if ( todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }}
    }
    eliminarCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado)
        this.guardarLocalStorage();
    }
    guardarLocalStorage() {
        localStorage.setItem('guardar',JSON.stringify(this.todos));

    }
    cargarLocalStorage() {
       this.todos = (localStorage.getItem('guardar')) ? JSON.parse(localStorage.getItem('guardar')) : [] ; 
    }
}