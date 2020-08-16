<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let id: number;
  export let title: string;
  export let completed: boolean;

  const dispatch = createEventDispatcher();
  const deleteTodo = () => {
    dispatch("deleteTodo", { id: id });
  };

  const toggleComplete = () => {
    dispatch("toggleComplete", { id: id });
  };
</script>

<style>
  .todo-item {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation-duration: 0.3s;
  }
  .remove-item {
    cursor: pointer;
    margin-left: 15px;
  }
  .completed {
    text-decoration: line-through;
    color: grey;
  }
  .todo-item-left {
    display: flex;
    align-items: center;
  }
  .todo-item-label {
    border: 1px solid white;
    margin-left: 12px;
  }
</style>

<div class="todo-item">
  <div class="todo-item-left">
    <input
      type="checkbox"
      bind:checked={completed}
      on:change={toggleComplete} />
    <div class="todo-item-label" class:completed>{title}</div>
  </div>
  <div class="remove-item" on:click={deleteTodo}>×</div>
</div>
