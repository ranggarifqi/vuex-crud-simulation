<template>
  <v-flex>
    <v-flex tag="h1" class="headline">Categories</v-flex>

    <v-dialog v-model="dialog" max-width="500px">
      <v-btn
        fixed
        slot="activator"
        color="primary"
        dark
        fab
        bottom
        right
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
              </v-flex>
              <!-- <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
              </v-flex> -->
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-data-table
      :headers="headers"
      :items="datas"
      class="elevation-1"
      :loading="loading"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.parent }}</td>
        <td class="text-xs-right">{{ props.item.is_active }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </v-flex>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
    data: () => ({
      dialog: false,
      headers: [
        { text: 'Category Name', value: 'name' },
        { text: 'Parent Category', value: 'parent' },
        { text: 'Is Active', value: 'is_active' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
    }),

    computed: {
      ...mapState({
        loading: state => state.category.loading,
        saveLoading: state => state.category.saveLoading,
        deleteLoading: state => state.category.deleteLoading,
        datas: state => state.category.datas,
        editedIndex: state => state.category.editedIndex,
        editedItem: state => state.category.editedItem,
        defaultItem: state => state.category.defaultItem,
      }),
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      ...mapActions('category',[
        'FETCH_DATA'
      ]),
      ...mapMutations('category',[
        'edit',
        'resetForm'
      ]),
      initialize () {
        this.FETCH_DATA();
      },
      editItem (item) {
        this.edit(item);
        this.dialog = true;
      },
      deleteItem (item) {
        const index = this.datas.indexOf(item)
        // confirm('Are you sure you want to delete this item?') && this.datas.splice(index, 1)
      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.resetForm();
        }, 300)
      },
      save () {
        // if (this.editedIndex > -1) {
        //   // Edit Data
        //   Object.assign(this.datas[this.editedIndex], this.editedItem)
        // } else {
        //   // Create New Data
        //   this.datas.push(this.editedItem)
        // }
        this.close()
      }
    }
  }
</script>
