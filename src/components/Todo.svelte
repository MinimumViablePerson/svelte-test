<script>
  export let todo = { id: 0, text: 'No todo given', completed: false }
  export let handleClick = () => {}

  import { send, receive } from '../transitions/sendAndReceive.js'
</script>

<div
  on:click={handleClick}
  class={todo.completed ? 'done' : ''}
  in:receive={{ key: todo.id }}
  out:send={{ key: todo.id }}
>
  {todo.text}
</div>

<style>
  .done {
    text-decoration: line-through;
  }
</style>