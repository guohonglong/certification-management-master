<template>
  <div>
    <!--<div>
      <header class="top_bar">
          <h3 class="cartname">検索画面</h3>
      </header>
    </div>-->
    <div>
        <tr>
          <td align="center" colspan="2">
            社員ID:
            <input type="text" name="inputemployee_id" />
          </td>
          <td align="center" colspan="2">
            名前:
            <input type="text" name="inputname" />
          </td>
          <td align="center" colspan="2">
            フリガナ:
            <input type="text" name="inputkana" />
          </td>
          <td align="center" colspan="2">
            入社年月日:
            <input type="text" name="inputentering_date" />
          </td>
        </tr>
        <tr>
          <td align="center" colspan="2">
            資格:
            <input type="text" name="inputemployee_id" />
          </td>
          <td align="center" colspan="2">
            取得日付:
            <input type="text" name="inputname" />
          </td>
          <td align="center" colspan="2">
            奨励金日付:
            <input type="text" name="inputkana" />
          </td>
          <td align="center" colspan="2">
            <v-btn
              color="blue" 
              v-on:click="goSearch"
            >検索</v-btn>
            <v-btn
              color="red" 
            >新規</v-btn>
          </td>
        </tr>
    </div>
      <v-data-table
        :headers="headers"
        :items="desserts"
        sort-by="employee_id"
        class="elevation-1"
      ></v-data-table>
  </div>
</template>
<script src="./js/search.js"></script>
  <style>
  table tr td {
    border: 1px solid gray;
    padding: 10px;

  }

  table {
    border-collapse: collapse;
    width: 800px;
    table-layout: fixed;
  }

  tr.firstLine {
    background-color: lightGray;
  }
  </style>