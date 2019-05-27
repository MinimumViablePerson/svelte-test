import { writable } from 'svelte/store'

let todos = [
  {
    id: 1,
    text: 'Buy milk',
    completed: false
  },
  {
    id: 2,
    text: 'Buy bread',
    completed: true
  }
]

const createTodos = () => {
  const { subscribe, set, update } = writable(todos)

  let id = 2

  const addTodo = text => {
    if (text.length === 0) return
    update(todos => [...todos, { id: ++id, text, completed: false }])
  }

  const toggleTodo = id => {
    update(todos => todos.map(todo => todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
    ))
  }

  return { subscribe, addTodo, toggleTodo }
}

export default createTodos()
