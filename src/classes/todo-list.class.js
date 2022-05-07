import { Todo } from './todo.class'

export class TodoList {
  constructor () {
    // this.todos = []
    this.cargarLocalStorage()
  }

  nuevoTodo (todo) {
    this.todos.push(todo)
    this.guardarLocalStorage()
  }

  eliminarTodo (id) {
    const ID = Number(id)
    // Filtrar los todos que sean diferentes al id
    this.todos = this.todos.filter((todo) => todo.id !== ID)
    this.guardarLocalStorage()
  }

  marcarCompletado (id) {
    const ID = Number(id)
    // Encontrar el todo que sea igual al id enviado
    const todoEncontrado = this.todos.find((todo) => todo.id === ID)
    todoEncontrado.completado = !todoEncontrado.completado
    this.guardarLocalStorage()
    /*
    for (const todo of this.todos) {
      console.log(ID, todo.id)
      if (todo.id === ID){
        todo.completado = !todo.completado
        break
      }
    }
    */
  }

  eliminarCompletados () {
    // Filtrar los todos que no esten completados
    this.todos = this.todos.filter((todo) => !todo.completado)
    this.guardarLocalStorage()
  }

  guardarLocalStorage () {
    window.localStorage.setItem('todo', JSON.stringify(this.todos))
  }

  cargarLocalStorage () {
    const isKeyInLocalStorage = window.localStorage.getItem('todo')

    this.todos =
                  isKeyInLocalStorage
                    ? JSON.parse(window.localStorage.getItem('todo'))
                    : []

    this.todos = this.todos.map(Todo.fromJson)
  }
}
