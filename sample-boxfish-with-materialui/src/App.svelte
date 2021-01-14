<script lang="ts">
  import "materialize-css/dist/css/materialize.css";
  import Router, { link } from "svelte-spa-router";
import History from "./History.svelte";
import Input from "./Input.svelte";

  const routes = {
    "/input": Input,
    "/history": History,
    "*": Input,
  };
</script>

<style>
  .brand-logo {
    margin-left: 20px;
    text-decoration: none;
  }
</style>

<main>
  <nav>
    <div class="nav-wrapper">
      <a href="/" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/input" use:link class="white-text">入力</a></li>
        <li><a href="/history" use:link class="white-text">履歴</a></li>
      </ul>
    </div>
  </nav>
  <Router {routes}/>
</main>
