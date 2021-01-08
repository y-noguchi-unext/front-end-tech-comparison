<script lang="ts">
  import { Card, CardBody, FormGroup, Input, Button } from "sveltestrap";
  import { push } from "svelte-spa-router";
  import type { IUser } from "../user/IUser";
  import {currentUser} from "../../store/store";
import { onMount } from "svelte";

  const fetchUser: () => Promise<IUser> = async () => {
    const response = await fetch(`https://randomuser.me/api/?results=1`);
    const json: IUser = await response.json();
    console.log(json);
    return json;
  };

  const handleLogin = async () => {
    const user: IUser = await fetchUser();
    currentUser.set({
      firstName: user.results[0].name.first,
      lastName: user.results[0].name.last,
      username: user.results[0].login.username,
      gender: user.results[0].gender,
    });
    push("/top");
  };
</script>

<style>
  .main-container {
    margin-top: 100px;
  }
</style>

<div class="main-container">
  <Card style="width: 400px; margin: auto;">
    <CardBody>
      <FormGroup>
        <Input type="email" name="email" id="email" placeholder="email" />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="password" />
      </FormGroup>
      <Button color="primary" on:click={handleLogin}>ログイン</Button>
    </CardBody>
  </Card>
</div>
