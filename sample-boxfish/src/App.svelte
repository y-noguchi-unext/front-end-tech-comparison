<script lang="ts">
  import { currentUser } from "./store/store";
  import Login from "./components/login/Login.svelte";
  import Top from "./components/top/Top.svelte";
  import Router, { push } from "svelte-spa-router";
  import { Navbar, NavbarBrand, Nav, NavLink } from "sveltestrap";
  import OrderHistory from "./components/history/OrderHistory.svelte";
  import User from "./components/user/User.svelte";
  import { onMount } from "svelte";
import Mypage from "./components/mypage/Mypage.svelte";

  const routes = {
    "/top": Top,
    "/history/order": OrderHistory,
    "/user": User,
    "/login": Login,
    "/mypage": Mypage,
    "*": Top,
  };

  onMount(() => {
    if(!$currentUser){
      push('/login');
    }
  });
</script>

<style>
  main {
    padding-top: 60px;
  }

  header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    z-index: 1000;
  }
</style>

<main>
  {#if $currentUser}
  <header>
    <Navbar color="dark" dark={true} expand="md">
      <NavbarBrand href="/#/top" on:click={() => push('/top')}>BtoBシステム</NavbarBrand>
      <Nav navbar>
        <NavLink href="/#/history/order" on:click={() => push('/history/order')} class="text-white">
          発注履歴
        </NavLink>
        <NavLink href="/#/user" on:click={() => push('/user')} class="text-white">
          ユーザー
        </NavLink>
        <NavLink href="/#/mypage" on:click={() => push('/mypage')} class="text-white">マイページ</NavLink>
      </Nav>
    </Navbar>
  </header>
  {/if}
  <Router {routes} />
</main>
