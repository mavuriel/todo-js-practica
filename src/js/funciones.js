import { Todo } from '../classes/'
import { todoList } from '../index'

const divTodoList = document.querySelector('.todo-list')
const txtInput = document.querySelector('.new-todo')
const form = document.querySelector('#form')
const btnBorrarTodos = document.querySelector('.clear-completed')
const listaFiltros = document.querySelector('.filters')
const anchorFiltros = document.querySelectorAll('.filtro')

export const CrearTodoHtml = (todo) => {
  const isCompleted = todo.completado

  const htmlTodo = `
  <li class="${isCompleted ? 'completed' : ''}" data-id="${todo.id}">
    <div class="view">
      <input class="toggle" type="checkbox" ${isCompleted ? 'checked' : ''}>
      <label>${todo.tarea}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  </li>
  `

  divTodoList.insertAdjacentHTML('beforeend', htmlTodo)
}

form.addEventListener('submit', (e) => {
  // TODO: informacion sobre preventdefault
  e.preventDefault()

  if (txtInput.value.length) {
    const nuevoTodo = new Todo(txtInput.value)
    todoList.nuevoTodo(nuevoTodo)
    CrearTodoHtml(nuevoTodo)
    txtInput.value = ''
  }
})

divTodoList.addEventListener('click', (e) => {
  // TODO: informacion sobre localname, parentelement y getattribute
  const nombreElemento = e.target.localName
  const todoElemento = e.target.parentElement.parentElement
  const todoId = todoElemento.getAttribute('data-id')
  if (nombreElemento.includes('input')) {
    todoList.marcarCompletado(todoId)
    todoElemento.classList.toggle('completed')
  }

  // TODO: informacion sobre includes y removechild
  if (nombreElemento.includes('button')) {
    todoList.eliminarTodo(todoId)
    divTodoList.removeChild(todoElemento)
  }

  console.log(todoList)
})

btnBorrarTodos.addEventListener('click', () => {
  todoList.eliminarCompletados()

  // TODO: como se puede hacer este for de diferente manera

  // TODO: informacion sobre children
  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    const elemento = divTodoList.children[i]
    // TODO: informacion sobre contains
    if (elemento.classList.contains('completed')) {
      divTodoList.removeChild(elemento)
    }
  }
})

listaFiltros.addEventListener('click', (e) => {
  const filtro = e.target.text

  if (!filtro) return

  anchorFiltros.forEach(e => e.classList.remove('selected'))

  e.target.classList.add('selected')

  for (const elemento of divTodoList.children) {
    elemento.classList.remove('hidden')

    const isCompleted = elemento.classList.contains('completed')

    switch (filtro) {
      case 'Pendientes':
        if (isCompleted) elemento.classList.add('hidden')
        break

      case 'Completados':
        if (!isCompleted) elemento.classList.add('hidden')
        break

      default:
        break
    }
  }
})
