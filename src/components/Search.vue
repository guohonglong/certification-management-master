
<template>
  <div>
  <v-app>
    <template>
      <div>
        <v-app-bar
          color="blue"
          dense
          dark
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>社員検索</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon @click="shwoSeachChange">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-app-bar>
      </div>
    </template>
    
    <v-form v-show="showSearch">
      
        <v-row>
          <v-col
            cols="1"
            md="2"
          >
            <v-text-field
              label="社員ID:"
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="1"
            md="2"
          >
            <v-text-field
              label="名前:"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="1"
            md="2"
          >
            <v-text-field
              label="フリガナ:"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="1"
            md="2"
          >
            <v-text-field
              label="入社年月日:"
              required
            ></v-text-field>
          </v-col>                  
        </v-row>
        <v-row>
          <v-col
            cols="1"
            md="2"
          >
            <v-text-field
              label="資格:"
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="1"
            md="2"
          >
            <v-text-field
              label="取得日付:"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="1"
            sm="2"
          >
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="奨励金日付:"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="menu = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col
            cols="1"
            md="2"
          >
          <v-btn
          color="blue" 
          v-on:click="goSearch"
          >検索</v-btn>
          <v-btn
          color="red" 
          >新規</v-btn>
          </v-col>                  
        </v-row>
     
    </v-form>   

    <v-data-table
        :headers="headers"
        :items="desserts"
        sort-by="employee_id"
        class="elevation-1"
      >
    </v-data-table>
    </v-app>
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