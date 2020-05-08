<template>
  <div id="input">
    <b-form-input v-model="text" placeholder="タイトルを入力してください" @change="e => setInput(e)" />
    <b-button variant="primary" @click="prepareTitle()">ポチ</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import { ITodo } from "../ITodo";

@Component
export default class InputArea extends Vue {
  private input = "";
  private setInput(e): void {
    this.input = e.target.value;
  }

  @Emit()
  public createTitle(title: string): void {
    // NOP
  }

  private prepareTitle(): void {
    this.createTitle(this.input);
  }
}
</script>

<style scoped>
#input {
  display: flex;
  justify-content: space-around;
}
</style>
