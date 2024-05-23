
<template>
  <v-data-table
    dense
    :headers="headers"
    :items="usuarios"
    item-key="id"
    class="elevation-1"
  >

  <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Seguro que quieres eliminar?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
  
  <template v-slot:[`item.actions`]="{ item }">
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

  </v-data-table>
</template>

<script>
import axios from "axios";
  export default {
    data: () => ({
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {},
      usuarios: [],
      
      headers: [
        {
          text: 'Id ',
          align: 'start',
          sortable: true,
          value: 'id',
        },
        { text: 'Usuario', value: 'usuario' },
        { text: 'Contraseña', value: 'contrasena' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    }),
    created(){
      axios.get("http://localhost:8181/usuarios/todos").then((resultado) => {
        this.usuarios = resultado.data;
      });
    },

     methods: {
      deleteItem (item) {
        this.editedIndex = this.usuarios.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.usuarios.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

     }

  };
</script>