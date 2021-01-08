<script lang="ts">
  import { currentUser } from "../../store/store";
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
    <h1 class="title">ようこそ、{$currentUser.lastName} {$currentUser.firstName}さん</h1>
    <p>システム利用可能時間: 9:00 ~ 21:00</p>
  </div>
</div>
