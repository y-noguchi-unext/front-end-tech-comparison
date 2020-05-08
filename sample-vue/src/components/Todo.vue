<template>
  <div>
    <input type="checkbox" @click="handleClickCheckbox" />
    <span v-bind:class="{completed: todo.completed}">{{todo.title}}</span>
    <button @click="handleClickDeleteButton">削除</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
import { ITodo } from "../ITodo";
@Component
export default class Todo extends Vue {
  @Prop({ type: Object, required: true })
  private todo!: ITodo;

  private handleClickDeleteButton() {
    this.todo.deleted = true;
  }

  private handleClickCheckbox() {
    this.todo.completed = !this.todo.completed;
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
