<template>
  <div>
    <Todo v-for="todo in todoList" :key="todo.id" :todo="todo" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
import Todo from "./Todo.vue";
import { ITodo } from "../ITodo";
@Component({
  components: {
    Todo
  }
})
export default class TodoList extends Vue {
  @Prop({ type: Array })
  private todoList: Array<ITodo>;
}
</script>
