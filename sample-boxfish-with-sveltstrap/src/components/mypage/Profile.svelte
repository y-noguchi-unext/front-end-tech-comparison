<script lang="ts">
  import { createEventDispatcher } from "svelte";

  let isEditing: boolean = false;
  export let key: string;
  export let keyName: string;
  export let value: string;

  const dispatch = createEventDispatcher();
  const updateValue = () => {
    dispatch("updateValue", { key: key, value: value });
  };

  const onEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      updateValue();
      isEditing = false;
    }
  };
</script>

<style>
  .profile {
    margin-bottom: 10px;
  }

  .element {
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }

  .element:hover {
    color: blue;
    border-bottom: 1px solid blue;
  }

  input {
    height: 1.2rem;
  }
</style>

<div class="profile">
  <span>{keyName}:</span>
  {#if isEditing}
    <input
      type="text"
      on:blur={() => (isEditing = false)}
      bind:value
      on:keypress={onEnter} />
  {:else}
    <span class="element" on:click={() => (isEditing = true)}> {value}</span>
  {/if}
</div>
