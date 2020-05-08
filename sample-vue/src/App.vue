<template>
  <div id="app">
    <InputArea @create-title="createTodo" />
    <TodoList :todoList="filterdTodo" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InputArea from "./components/InputArea.vue";
import TodoList from "./components/TodoList.vue";
import { ITodo } from "./ITodo";

@Component({
  components: {
    InputArea,
    TodoList
  }
})
export default class App extends Vue {
  private todoList: Array<ITodo> = [
    {
      id: 0,
      title: "牛乳を買う",
      completed: false,
      deleted: false
    },
    {
      id: 1,
      title: "牛乳をコップに入れる",
      completed: false,
      deleted: false
    },
    {
      id: 2,
      title: "牛乳を飲む",
      completed: false,
      deleted: false
    }
  ];

  private createTodo(title: string): void {
    this.todoList.push({
      id: this.todoList.length
        ? this.todoList[this.todoList.length - 1].id + 1
        : 1,
      title: title,
      completed: false,
      deleted: false
    });
  }

  public get filterdTodo(): ITodo[] {
    return this.todoList.filter(todo => !todo.deleted);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
