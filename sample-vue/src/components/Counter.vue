<template>
  <div>
    <span>{{count}}</span>
    <button @click="addCount">ボタン</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Counter extends Vue {
  @Prop()
  public init!: number;

  hello(): void {
    alert("hello");
  }

  private count = 0;
  
  public addCount(): void {
    this.count = this.init;
  } 
}
</script>
