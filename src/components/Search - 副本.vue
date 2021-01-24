
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
            <v-menu
              ref="inmenu"
              v-model="inmenu"
              :close-on-content-click="false"
              :return-value.sync="indate"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="indate"
                  label="入社年月日:"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="indate"
                no-title
                scrollable
                locale="ja"
                color="green lighten-1"
                header-color="primary"
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="inmenu = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.inmenu.save(indate)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>           
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
            <v-menu
              ref="getmenu"
              v-model="getmenu"
              :close-on-content-click="false"
              :return-value.sync="getdate"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="getdate"
                  label="取得日付:"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="getdate"
                no-title
                scrollable
                locale="ja"
                color="green lighten-1"
                header-color="primary"
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="getmenu = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.getmenu.save(getdate)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
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
                locale="ja"
                color="green lighten-1"
                header-color="primary"
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
          color="primary"
          dark
          v-on:click="goSearch"
          >検索</v-btn>
          <v-btn
          color="primary"
          dark
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
      <template v-slot:top>


          <v-dialog
            v-model="dialog"
            max-width="500px"
          >

            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.id"
                        label="社員ID"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.name"
                        label="名前"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.frigana"
                        label="フリガナ"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.entering_date"
                        label="入社年月日"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.protein"
                        label="Protein (g)"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
  
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
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