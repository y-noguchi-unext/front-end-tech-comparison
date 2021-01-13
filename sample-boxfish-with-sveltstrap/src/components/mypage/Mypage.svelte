<script lang="ts">
  import { currentUser } from "../../store/store";
  import Profile from "./Profile.svelte";

  const updateValue = (e: { detail: { key: string; value: string } }) => {
    currentUser.update((user) => {
      user[e.detail.key] = e.detail.value;
      return user;
    });
  };
</script>

<style>
  .card-container {
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    padding: 1.25rem;
    min-width: auto;
    width: 100%;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    padding-top: 1.25rem;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
  }

  .title {
    font-size: large;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 20px;
  }
</style>

<div class="main-container">
  <div class="card-container">
    <h1 class="title">マイページ</h1>
    <Profile
      key={'lastName'}
      keyName={'姓'}
      value={$currentUser.lastName}
      on:updateValue={updateValue} />
    <Profile
      key={'firstName'}
      keyName={'名'}
      value={$currentUser.firstName}
      on:updateValue={updateValue} />
    <Profile
      key={'gender'}
      keyName={'性別'}
      value={$currentUser.gender}
      on:updateValue={updateValue} />
    <Profile
      key={'username'}
      keyName={'ユーザー名'}
      value={$currentUser.username}
      on:updateValue={updateValue} />
  </div>
</div>
