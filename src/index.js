import './styles.css'

import { TodoList } from './classes/index'
import { CrearTodoHtml } from './js/funciones'

export const todoList = new TodoList()

todoList.todos.forEach(CrearTodoHtml)

// const newTodo = new Todo('aprender JS')
// todoList.nuevoTodo(newTodo)

console.log('todos', todoList.todos)
