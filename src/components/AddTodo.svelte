<script>
  import todos from '../stores/todos'

  let todoText = ''

  const handleSubmit = event => {
    event.preventDefault()
    todos.addTodo(todoText)
    todoText = ''
  }
</script>

<form class='new-todo-form' on:submit={handleSubmit}>
  <input bind:value={todoText} placeholder='enter a todo...'/>
</form>

<style>
  input {
    font-size: 1rem;
    border-radius: 4px;
    padding: 4px;
    margin-bottom: 10px;
  }
</style>
