<script lang="ts">
  import {
    Card,
    CardBody,
    FormGroup,
    Input,
    Button,
  } from "sveltestrap";
  
  import { push } from 'svelte-spa-router'
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
      <Button color="primary" on:click={() => push('/top/')}>ログイン</Button>
    </CardBody>
  </Card>
</div>
