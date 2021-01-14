<script lang="ts">
  import axios from "axios";
  import { onMount } from "svelte";
  import type IUser from "./IUser";

  // let users: IUser[];
  const fetchUsers = async () => {
    const result = await axios.get(
      "https://jsonbox.io/box_1bab31885b7dd98aff06"
    );
    const users: IUser[] = await result.data;
    return users;
  };
</script>

<style>
  .main-container {
    display: flex;
    flex-direction: column;
    padding-top: 1.25rem;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
  }
</style>

<div class="main-container">
  {#await fetchUsers()}
    <div class="preloader-wrapper active">
      <div class="spinner-layer spinner-red-only">
        <div class="circle-clipper left">
          <div class="circle" />
        </div>
        <div class="gap-patch">
          <div class="circle" />
        </div>
        <div class="circle-clipper right">
          <div class="circle" />
        </div>
      </div>
    </div>
  {:then users}
    <table class="highlight">
      <thead>
        <tr>
          <th>ID</th>
          <th>email</th>
          <th>plan</th>
        </tr>
      </thead>
      <tbody>
        {#each users as user}
          <tr>
            <td>{user._id}</td>
            <td>{user.email}</td>
            <td>{user.plan}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/await}
</div>
