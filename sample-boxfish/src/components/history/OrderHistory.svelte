<script lang="ts">
  import {
    Button,
    Input,
    Label,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Table,
  } from "sveltestrap";

  let isOpen = false;
  let selectedType: string;
  const handleTypeSelected = (e: CustomEvent) => {
    selectedType = e.target.textContent;
  }


  const now = new Date();
  let orders = [];

  const handleSearchExecuted = () => {
    let order = {
      ordering_id: 1,
      company_code: "1111",
      company_name: "テスト株式会社",
      processing_date:
        now.getFullYear() + "/" + now.getMonth() + "/" + now.getDate(),
      processing_time:
        new Date().getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
      processing_type: "一括発注",
      result: "OK",
      ordering_couunt: 10,
      result_file: "orderfile_1111_1.csv",
    }
    orders = [...orders, order]
  }
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

  .title {
    font-size: large;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    padding: 0.5rem;
  }

  .condition-container {
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    padding: 1.25rem;
    min-width: auto;
    width: 100%;
  }

  .conditions {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 1.25rem;
  }

  .date-from-to {
    display: flex;
    flex-direction: column;
  }

  .two-inputs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: 3rem;
  }

  .childa {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .button {
    margin: 2rem 0 0 auto;
  }

  .search-result {
    margin-top: 3rem;
    width: 100%;
  }
</style>

<div class="main-container">
  <div class="condition-container">
    <h1 class="title">検索条件</h1>
    <div class="conditions">
      <div class="date-from-to">
        <Label>処理日</Label>
        <div class="two-inputs">
          <div>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder" />
          </div>
          <p class="childa">~</p>
          <div>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder" />
          </div>
        </div>
      </div>
      <div class="type">
        <Label>処理区分</Label>
        <Dropdown {isOpen} toggle={() => (isOpen = !isOpen)} setActiveFromChild>
          <DropdownToggle caret color="secondary" >
            {selectedType ? selectedType : '　　　　'}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem on:click={handleTypeSelected}>一括発注</DropdownItem>
            <DropdownItem on:click={handleTypeSelected}>単票発注</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
    <div class="button">
      <Button on:click={handleSearchExecuted}>検索</Button>
    </div>
  </div>

  <div class="search-result">
    <Table hover responsive>
      <thead>
        <tr>
          <th>発注ID</th>
          <th>法人コード</th>
          <th>法人名</th>
          <th>処理日</th>
          <th>時間</th>
          <th>処理分類</th>
          <th>結果</th>
          <th>発注件数</th>
          <th>入力結果リスト</th>
        </tr>
      </thead>
      <tbody>
        {#each orders as order}
          <tr>
            <th scope="row">{order.ordering_id}</th>
            <td>{order.company_code}</td>
            <td>{order.company_name}</td>
            <td>{order.processing_date}</td>
            <td>{order.processing_time}</td>
            <td>{order.processing_type}</td>
            <td>{order.result}</td>
            <td>{order.ordering_couunt}</td>
            <td>{order.result_file}</td>
          </tr>
        {/each}
      </tbody>
    </Table>
  </div>
</div>
