<script lang="ts">
  import * as yup from "yup";
  import * as M from "materialize-css";
  import "materialize-css/dist/css/materialize.css";
  import { onMount } from "svelte";
  import axios from "axios";
  import { createSchema } from "./FormValidator";
  let datepicker: any;
  let email: string;
  let plan: string;
  let isUnder18: boolean = false;
  let gender: string;
  let openPreferredDate: string;
  let submitted: boolean = false;

  const { handleChange, errors } = createSchema({
    email: yup
      .string()
      .email("メールアドレスの形式で入力してください。")
      .required("必須項目です。"),
    plan: yup.number().required(),
  });

  const handlePlanChange = e => console.log(e);

  onMount(() => {
    M.AutoInit();
    M.Datepicker.init(datepicker, {
      i18n: {
        months: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        monthsShort: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        weekdays: [
          "日曜日",
          "月曜日",
          "火曜日",
          "水曜日",
          "木曜日",
          "金曜日",
          "土曜日",
        ],
        weekdaysShort: [
          "日曜日",
          "月曜日",
          "火曜日",
          "水曜日",
          "木曜日",
          "金曜日",
          "土曜日",
        ],
        weekdaysAbbrev: ["日", "月", "火", "水", "木", "金", "土"],
        clear: "クリア",
        cancel: "キャンセル",
      },
      format: "yyyy-mm-dd",
      onSelect: (date) =>
        (openPreferredDate = `${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDate()}`),
      autoClose: true,
    });
  });

  const handleSubmit = async () => {
    console.log(errors);
    submitted = true;
    await axios.post("https://jsonbox.io/box_1bab31885b7dd98aff06", {
      email: email,
      plan: plan,
      isUnder18: isUnder18,
      gender: gender,
      openPreferredDate: openPreferredDate,
    });
    email = "";
    plan = "";
    isUnder18 = false;
    gender = "";
    openPreferredDate = "";
    submitted = false;
  };
</script>

<style>
  .card-container {
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    padding: 5%;
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

  .input-field {
    display: flex;
    flex-direction: column;
  }

  button {
    width: 200px;
  }
</style>

<main>
  <div class="main-container">
    <div class="card-container">
      <h1 class="title">入力項目</h1>
      <div class="input-field">
        <i class="material-icons prefix">account_circle</i>
        <input
          id="email"
          type="email"
          class="validate"
          name="email"
          bind:value={email}
          on:change={handleChange} />
        <label for="email">Email</label>
      </div>
      <div class="input-field">
        <select id="sample-select" bind:value={plan} on:change={handlePlanChange}>
          <option value="" disabled selected>プラン</option>
          <option value="1">シングル</option>
          <option value="2">シェア</option>
          <option value="3">デラックス</option>
        </select>
        <label for="sample-select">プラン選択</label>
      </div>
      <div class="input-field">
        <p>
          <label>
            <input type="checkbox" class="filled-in" bind:checked={isUnder18} />
            <span>18才以下ですか？</span>
          </label>
        </p>
      </div>
      <div class="input-field">
        <input
          id="sample-date"
          type="text"
          class="datepicker"
          bind:this={datepicker} />
        <label for="sample-date">開通希望日</label>
      </div>
      <div class="input-field">
        <p>
          <label>
            <input
              class="with-gap"
              bind:group={gender}
              type="radio"
              checked
              value={'male'} />
            <span>男性</span>
          </label>
        </p>
        <p>
          <label>
            <input
              class="with-gap"
              bind:group={gender}
              type="radio"
              value={'female'} />
            <span>女性</span>
          </label>
        </p>
      </div>
      <button
        class="btn waves-effect waves-light modal-trigger"
        type="button"
        name="action"
        href="#modal1">
        確認
      </button>
    </div>
  </div>
  <!-- Modal Structure -->
  <div id="modal1" class="modal">
    <div class="modal-content">
      <h1 class="title">確認</h1>
      <p>メールアドレス: {email}</p>
      <p>プラン: {plan}</p>
      <p>
        <label>
          <input
            type="checkbox"
            class="filled-in"
            bind:checked={isUnder18}
            disabled />
          <span>18才以下ですか？</span>
        </label>
      </p>
      <p>開通希望日: {openPreferredDate}</p>
      <p>性別: {gender}</p>
      <button
        class="btn waves-effect waves-light modal-close"
        class:disabled={submitted}
        type="submit"
        name="action"
        on:click={handleSubmit}>
        送信
      </button>
    </div>
  </div>
</main>
