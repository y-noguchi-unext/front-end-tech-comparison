<script lang="ts">
  import { onMount } from "svelte";
  import type { IUser } from "./IUser";
  import { Spinner, Table, Button, Input } from "sveltestrap";

  let users: IUser;
  let fetchLimit: string = "";
  let isFetching: boolean = true;

  const fetchUsers = async () => {
    isFetching = true;
    const response = await fetch(
      `https://randomuser.me/api/?results=${fetchLimit ? fetchLimit : 10}`
    );
    users = await response.json();
    isFetching = false;
  };

  onMount(fetchUsers);
</script>

<style>
  .main-container {
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 1.25rem;
  }

  .title {
    font-size: large;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    padding: 0.5rem;
  }

  .refetch {
    display: flex;
  }

  .refetch-input {
    width: 20%;
    margin-right: 0.5rem;
  }

  .spinner {
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-result {
    margin-top: 3rem;
    width: 100%;
  }

  .avatar {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }
</style>

<div class="main-container">
  <h1 class="title">ユーザー一覧</h1>
  <div class="refetch">
    <div class="refetch-input">
      <Input type="number" placeholder="取得件数" bind:value={fetchLimit} />
    </div>
    <Button outline on:click={fetchUsers}>取得しなおす</Button>
  </div>
  {#if !users || isFetching}
    <div class="spinner">
      <Spinner color="dark" />
    </div>
  {:else}
    <div class="search-result">
      <Table hover responsive>
        <thead>
          <tr>
            <th>アバター</th>
            <th>姓</th>
            <th>名</th>
            <th>性別</th>
            <th>ユーザー名</th>
            <th>電話番号</th>
          </tr>
        </thead>
        <tbody>
          {#each users.results as user}
            <tr>
              <th scope="row">
                <img
                  class="avatar"
                  src={user.picture.medium}
                  alt={user.name.last} />
              </th>
              <td>{user.name.last}</td>
              <td>{user.name.first}</td>
              <td>{user.gender}</td>
              <td>{user.login.username}</td>
              <td>{user.phone}</td>
            </tr>
          {/each}
        </tbody>
      </Table>
    </div>
  {/if}
</div>
