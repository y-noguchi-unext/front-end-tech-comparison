<script lang="ts">
  import Login from "./components/login/Login.svelte";
  import Top from "./components/top/Top.svelte";
  import Router, { push } from "svelte-spa-router";
  import { Navbar, NavbarBrand, Nav, NavLink } from "sveltestrap";
  import OrderHistory from "./components/history/OrderHistory.svelte";
import User from "./components/user/User.svelte";

  const routes = {
    "/top/": Top,
    "/history/order": OrderHistory,
    "/user": User,
    "*": Login,
  };
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
  <header>
    <Navbar color="dark" dark={true} expand="md">
      <NavbarBrand href="/">BtoBシステム</NavbarBrand>
      <Nav navbar>
        <NavLink on:click={() => push('/history/order')} class="text-white">
          発注履歴
        </NavLink>
        <NavLink on:click={() => push('/user')} class="text-white">ユーザー</NavLink>
        <NavLink href="#" class="text-white">Link</NavLink>
      </Nav>
    </Navbar>
  </header>
  <Router {routes} />
</main>
