<script>
  import Todo from './Todo.svelte'
  import todos from '../stores/todos'

  $: incompleteTodos = $todos.filter(todo => !todo.completed)
  $: completedTodos = $todos.filter(todo => todo.completed)
</script>

<div class='todos'>
  <div class='incomplete-todos'>
    <h2>Incomplete todos:</h2>
    {#each incompleteTodos as todo (todo.id)}
        <Todo todo={todo} handleClick={() => todos.toggleTodo(todo.id)} />
    {/each}
  </div>

  <div class='completed-todos'>
    <h2>Completed todos:</h2>
    {#each completedTodos as todo (todo.id)}
        <Todo todo={todo} handleClick={() => todos.toggleTodo(todo.id)} />
    {/each}
  </div>
</div>

<style>
  .todos {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>