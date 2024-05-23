<template>
    <v-app>
        <SideBarVue />
        <v-layout row>
            <v-flex md8>
                <v-app style="background-color: #EEEEEE;" class="rounded-tr-xl rounded-br-xl">
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="12">
                                <v-app-bar color="rgba(0,0,0,0)" flat class="mx-8 mb-8 mt-3">
                                    <!-- <v-text-field
                      prepend-icon="mdi-magnify"
                      color="teal"
                      placeholder="Search your symptoms"
                      flat
                      success 
                    ></v-text-field> -->
                                    <v-spacer></v-spacer>
                                    <!-- <v-chip
                      class="ma-2"
                      color="white" 
                    >
                      <v-icon left color="teal">
                        mdi-clock-time-nine
                      </v-icon>
                      14:02 AM Today Nov,19
                    </v-chip> -->
                                </v-app-bar>
                            </v-col>
                            <v-col cols="12" sm="12">
                                <v-card class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n15">
                                    <v-list-item three-line>
                                        <v-list-item-content class="pa-10">
                                            <v-list-item-title class="headline mb-1">
                                                <span class="orange--text">Quejas</span> u observaciones
                                            </v-list-item-title>
                                            <v-list-item-subtitle>
                                                Aquí va a apuntar cada una de las quejas u observaciones de cada uno de sus
                                                vehículos<br>
                                                Esto ayudará a la IA a detectar alguna descompostura actual o por venir
                                            </v-list-item-subtitle>
                                        </v-list-item-content>

                                        <v-list-item-avatar tile size="150" class="pr-10">
                                            <img
                                                src="https://img.freepik.com/premium-vector/artificial-intelligence-cyborg-technological-brain-white-background_185386-676.jpg">
                                        </v-list-item-avatar>
                                    </v-list-item>

                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="12">
                                <v-card class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n10">

                                    <v-data-table :headers="headers" :items="desserts" sort-by="idQueja"
                                        class="elevation-0 ma-10">
                                        <template v-slot:top>
                                            <v-toolbar flat>
                                                <v-toolbar-title>Tabla de quejas</v-toolbar-title>
                                                <v-divider class="mx-4" inset vertical></v-divider>
                                                <v-spacer></v-spacer>
                                                <v-dialog v-model="dialog" max-width="500px">
                                                    <!-- <template v-slot:activator="{ on, attrs }">
                                                        <v-btn color="orange" dark class="mb-2" v-bind="attrs" v-on="on">
                                                            Agregar
                                                        </v-btn>
                                                    </template> -->
                                                    <v-card>
                                                        <v-card-title>
                                                            <span class="text-h5">{{ formTitle }}</span>
                                                        </v-card-title>

                                                        <v-card-text>
                                                            <v-container>
                                                                <v-row>
                                                                    <v-col cols="12" sm="6" md="4">
                                                                        <v-text-field v-model="editedItem.queja"
                                                                            label="Queja"></v-text-field>
                                                                    </v-col>
                                                                    <v-col cols="12" sm="6" md="4">
                                                                        <v-text-field v-model="editedItem.placas"
                                                                            label="Placas"></v-text-field>
                                                                    </v-col>
                                                                    <!-- <v-col cols="12" sm="6" md="4">
                                                                        <v-text-field v-model="editedItem.fat"
                                                                            label="Fat (g)"></v-text-field>
                                                                    </v-col>
                                                                    <v-col cols="12" sm="6" md="4">
                                                                        <v-text-field v-model="editedItem.carbs"
                                                                            label="Carbs (g)"></v-text-field>
                                                                    </v-col>
                                                                    <v-col cols="12" sm="6" md="4">
                                                                        <v-text-field v-model="editedItem.protein"
                                                                            label="Protein (g)"></v-text-field>
                                                                    </v-col> -->
                                                                </v-row>
                                                            </v-container>
                                                        </v-card-text>

                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>
                                                            <v-btn color="blue darken-1" text @click="close">
                                                                Cancelar
                                                            </v-btn>
                                                            <v-btn color="blue darken-1" text @click="save">
                                                                Guardar
                                                            </v-btn>
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-dialog>
                                                <v-dialog v-model="dialogDelete" max-width="500px">
                                                    <v-card>
                                                        <v-card-title class="text-h5">¿Está segur@ de que quieres eliminar?
                                                        </v-card-title>
                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>
                                                            <v-btn color="red darken-1" text
                                                                @click="closeDelete">Cancelar</v-btn>
                                                            <v-btn color="green darken-1" text
                                                                @click="deleteItemConfirm">Aceptar</v-btn>
                                                            <v-spacer></v-spacer>
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-dialog>
                                            </v-toolbar>
                                        </template>
                                        <template v-slot:[`item.actions`]="{ item }">
                                            <v-icon small class="mr-2" @click="editItem(item)">
                                                mdi-pencil
                                            </v-icon>
                                            <v-icon small @click="deleteItem(item)">
                                                mdi-delete
                                            </v-icon>
                                        </template>
                                        <template v-slot:no-data>
                                            <v-btn color="white" @click="initialize">
                                                No hay quejas
                                            </v-btn>
                                        </template>
                                    </v-data-table>

                                </v-card>
                            </v-col>
                            <!-- <v-col cols="12" sm="6">
                                <v-card class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n4"
                                    color="teal" dark>
                                    <v-list-item three-line>
                                        <v-list-item-content class="pa-2">
                                            <v-list-item-title class="headline mb-1">
                                                Heart rate <br>
                                                <h2>112 bpm</h2>
                                            </v-list-item-title>

                                        </v-list-item-content>

                                        <v-list-item-avatar tile size="150" class="pr-10">
                                            <v-icon size="100">fas fa-heartbeat</v-icon>
                                        </v-list-item-avatar>
                                    </v-list-item>

                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-card class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n12">

                                    <v-app-bar color="rgba(0,0,0,0)" flat class="ma-8">
                                        <h5>Your activity</h5>
                                        <v-spacer></v-spacer>
                                        <v-btn color="teal" rounded dark depressed>Week</v-btn>
                                        <v-btn text>Mounth</v-btn>
                                    </v-app-bar>
                                    <v-progress-circular rotate="360" size="100" width="15" value="50" color="teal"
                                        class="mt-n5 ml-5 mb-2">
                                        50
                                    </v-progress-circular>
                                    <v-progress-circular rotate="360" size="100" width="15" value="70" color="red"
                                        class="mt-n5 ml-2 mb-2">
                                        70
                                    </v-progress-circular>
                                    <v-progress-circular rotate="360" size="100" width="15" value="80" color="blue"
                                        class="mt-n5 ml-2 mb-2">
                                        80
                                    </v-progress-circular>
                                </v-card>
                            </v-col> -->
                        </v-row>
                    </v-container>
                </v-app>
            </v-flex>
            <v-flex md4>
                <v-app>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="12">
                                <v-list two-line>

                                    <v-list-item>
                                        <!-- <v-list-item-avatar>
                                            <img src="https://cdn.vuetifyjs.com/images/lists/3.jpg">
                                        </v-list-item-avatar> -->
                                        <v-list-item-content>
                                            <v-list-item-title>Hacer queja</v-list-item-title>
                                            <v-list-item-subtitle class="orange--text">Elija un carro</v-list-item-subtitle>
                                        </v-list-item-content>
                                        <v-spacer></v-spacer>
                                        <!-- <v-icon color="teal">mdi-menu</v-icon> -->
                                    </v-list-item>
                                </v-list>
                            </v-col>

                            <v-col cols="12" class="d-flex justify-center align-self-center">
                                <v-list three-line class="mt-n4">
                                    <v-list-item-group>
                                        <template v-for="(item) in files">
                                            <v-list-item :key="item.idvehiculo" @click="guardarPlacas(item.placas)">
                                                <v-list-item-avatar rounded>
                                                    <img :src="item.imagen" />
                                                </v-list-item-avatar>
                                                <template>
                                                    <v-list-item-content>
                                                        <v-list-item-title >{{item.marca +" "+ item.modelo +" "+ item.anio}}</v-list-item-title>
                                                        <v-list-item-subtitle v-text="item.placas"></v-list-item-subtitle>
                                                    </v-list-item-content>
                                                    <v-list-item-action>
                                                        <v-list-item-action-text
                                                            v-text="item.action"></v-list-item-action-text>
                                                    </v-list-item-action>
                                                </template>
                                            </v-list-item>
                                        </template>
                                    </v-list-item-group>
                                </v-list>
                            </v-col>

                            <!-- ver como funciona mejor el form y el textfield y hacer lo mas funcional -->
                            <v-col cols="12" sm="12">
                                <v-card class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n4 py-4"
                                    color="orange" dark flat>
                                    <v-form ref="form" v-model="valid" lazy-validation>
                                        <v-text-field v-model="textoQueja" :counter="100" :rules="textoQuejaRules"
                                            label="Queja" required class="ma-5"></v-text-field>
                                    </v-form>
                                </v-card>
                            </v-col>

                            <div class="my-2 container">
                                <v-btn @click.prevent="hacerQueja()" color="orange darken-4 white--text" dark block
                                    tile>Guardar queja</v-btn>
                            </div>

                        </v-row>
                    </v-container>
                </v-app>
            </v-flex>
        </v-layout>
    </v-app>
</template>
<script>
import SideBarVue from "../components/SideBarVue";

export default {
    data: () => ({
        IA: [],
        valid: true,
        textoQueja: '',
        textoQuejaRules: [
            v => !!v || 'queja es nesesaria',
            v => (v && v.length <= 100) || 'La queja no debe de contener mas de 100 caracteres',
        ],
        width: 2,
        radius: 10,
        padding: 8,
        lineCap: 'round',
        value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
        fill: false,
        type: 'trend',
        autoLineWidth: false,
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                text: 'Queja',
                align: 'start',
                sortable: false,
                value: 'queja',
            },
            { text: 'Placas', value: 'placas' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [],
        selectedPlacas: null,
        editedIndex: -1,
        editedItem: {
            queja: '',
            placas: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        },
        defaultItem: {
            queja: '',
            placas: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        },
        files: [
    {
        "idvehiculo": 1,
        "marca": "Nissan",
        "modelo": "NP300",
        "anio": 2013,
        "placas": "AUTE-93-23",
        "imagen": "https://www.carrent.mx/wp-content/uploads/2017/05/Untitled-3.jpg?x70672",
        "idusuario": 1
    },
    {
        "idvehiculo": 5,
        "marca": "Nissan",
        "modelo": "NP300",
        "anio": 2022,
        "placas": "AJSNE-93-98",
        "imagen": "https://www.carrent.mx/wp-content/uploads/2017/05/Untitled-3.jpg?x70672",
        "idusuario": 1
    },
    {
        "idvehiculo": 9,
        "marca": "Nissan",
        "modelo": "NP300",
        "anio": 2017,
        "placas": "ATTE-93-98",
        "imagen": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_c7abd25f91af4f0f99faa58175b9ec09.jpg",
        "idusuario": 1
    },
    {
        "idvehiculo": 12,
        "marca": "Nissan",
        "modelo": "NP300",
        "anio": 2009,
        "placas": "AJSNE-00-54",
        "imagen": "https://www.carrent.mx/wp-content/uploads/2017/06/NP300-Caja-Seca-.png?x70672",
        "idusuario": 1
    },
    // {
    //     "idvehiculo": 13,
    //     "marca": "Italika",
    //     "modelo": "FT150",
    //     "anio": 2020,
    //     "placas": "AJSNE-93-98",
    //     "imagen": "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00750108434380l.jpg",
    //     "idusuario": 1
    // },
    // {
    //     "idvehiculo": 14,
    //     "marca": "Italika",
    //     "modelo": "DM200",
    //     "anio": 2023,
    //     "placas": "AJSNE-93-98",
    //     "imagen": "https://dhqlmcogwd1an.cloudfront.net/images/phocagallery/Italika/dm150/01-italika-dm150-2022-estudio-azul.jpg",
    //     "idusuario": 1
    // },
    // {
    //     "idvehiculo": 15,
    //     "marca": "Ford",
    //     "modelo": "450",
    //     "anio": 2017,
    //     "placas": "AJSNE-93-98",
    //     "imagen": "https://commerciumcars.files.wordpress.com/2020/07/f450-4.jpg",
    //     "idusuario": 1
    // }
]
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Nueva queja' : 'Editar queja'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    components: {
        SideBarVue,
    },

    methods: {
        initialize() {
            this.desserts = [
                {
                    idQueja:1,
                    queja: 'No frena bien y aveces rechinan los frenos ',
                    placas: 'AUTE-93-23',

                },
                // {
                //     idQueja:2,
                //     queja: 'Pierde fuerza el motor, tira humo blanco y pasa agua al aceite',
                //     placas: 'AUTE-93-23',
                // },
            
            ]
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()
        },

        hacerQueja(){
            console.log(this.textoQueja)
            console.log(this.selectedPlacas)
            this.textoQueja = {
                    idQueja:3,
                    queja: this.textoQueja,
                    placas: this.selectedPlacas,

                },
            this.desserts.push(this.textoQueja);
            this.textoQueja = '';
        },

        guardarPlacas(placas) {
      this.selectedPlacas = placas;
      console.log(this.selectedPlacas)
    },
    },

};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
  
  </style>