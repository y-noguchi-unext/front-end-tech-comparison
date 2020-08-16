<script lang="ts">
  import TodoItem from "./TodoItem.svelte";
  let todos = [
    {
      id: 1,
      title: "牛乳を買う",
      completed: false,
    },
    {
      id: 2,
      title: "牛乳を売る",
      completed: false,
    },
    {
      id: 3,
      title: "牛乳を買いなおす",
      completed: false,
    },
  ];

  let newTodoTitle = "";
  let currentFilter = "all";
  let nextId = 4;
  $: filteredTodo =
    currentFilter === "all"
      ? todos
      : currentFilter === "completed"
      ? todos.filter((todo) => todo.completed)
      : todos.filter((todo) => !todo.completed);

  const addTodo = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.isComposing) {
      // todos.push({
      //   id: nextId,
      //   title: newTodoTitle,
      //   completed: false,
      // }); // これだと動かない
      todos = [
        ...todos,
        {
          id: nextId,
          title: newTodoTitle,
          completed: false,
        },
      ];
      nextId = nextId + 1;
      newTodoTitle = "";
    }
  };

  const handleToggleComplete = (e: { detail: { id: number } }) => {
    const targetTodoIndex = todos.findIndex((todo) => todo.id === e.detail.id);
    const targetTodo = todos[targetTodoIndex];
    targetTodo.completed = !targetTodo.completed;
    todos.splice(targetTodoIndex, 1, targetTodo);
  };

  const handleDeleteTodo = (e: { detail: { id: number } }) => {
    todos = todos.filter((todo) => todo.id != e.detail.id);
  };

  const handleCheckAll = (
    e: Event & {
      target: EventTarget & HTMLInputElement;
    }
  ) => {
    todos = todos.map((todo) => {
      todo.completed = e.target.checked;
      return todo;
    });
  };

  const handleUpdateFilter = (newFilter: string) => (currentFilter = newFilter);
</script>

<style>
  .container {
    max-width: 800px;
    margin: 10px auto;
  }

  .inner-container {
    margin-top: 10px;
    padding-top: 10px;
    border-top: solid 1px gray;
  }

  .input-area {
    width: 100%;
  }

  .todos {
    margin-top: 10px;
    padding-top: 10px;
  }
</style>

<div class="container">
  <h2>Svelte Todo App</h2>
  <input
    type="text"
    placeholder="Insert todo Item"
    bind:value={newTodoTitle}
    on:keydown={addTodo}
    class="input-area" />
  <div class="todos">
    {#each filteredTodo as todo}
      <TodoItem
        {...todo}
        on:toggleComplete={handleToggleComplete}
        on:deleteTodo={handleDeleteTodo} />
    {/each}
  </div>
  <div class="inner-container">
    <input type="checkbox" on:change={handleCheckAll} />
    Check All
  </div>
  <div class="inner-container">
    <button on:click={() => handleUpdateFilter('all')}>All</button>
    <button on:click={() => handleUpdateFilter('active')}>Active</button>
    <button on:click={() => handleUpdateFilter('completed')}>Completed</button>
  </div>
</div>
