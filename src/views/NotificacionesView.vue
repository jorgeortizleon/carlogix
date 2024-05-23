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
                                                <span class="orange--text">Notificaciones</span> y avisos
                                            </v-list-item-title>
                                            <v-list-item-subtitle>
                                                En este apartado se mostraran las piezas con un desgaste muy avansado<br>
                                                Asi como las conclusiones de las IA
                                            </v-list-item-subtitle>
                                        </v-list-item-content>

                                        <!-- <v-list-item-avatar tile size="150" class="pr-10">
                                            <img
                                                src="https://img.freepik.com/premium-vector/artificial-intelligence-cyborg-technological-brain-white-background_185386-676.jpg">
                                        </v-list-item-avatar> -->
                                    </v-list-item>

                                </v-card>
                            </v-col>
                            <spacer> s</spacer>
                            <v-col cols="12" sm="12">
                                <v-card class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n10">
                                    <v-toolbar color="rgba(0,0,0,0)" flat class="py-4 ">
                                        <v-toolbar-title class=""> Piezas </v-toolbar-title>
                                    </v-toolbar>
                                    <v-simple-table class="ma-0">
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="text-left">
                                                        notificacion
                                                    </th>
                                                    <th class="text-left">
                                                        Placas del vehiculo
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in desserts" :key="item.name">
                                                    <td>{{ item.queja }}</td>
                                                    <td>{{ item.placas }}</td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>

                                </v-card>
                            </v-col>

                            <spacer> s</spacer>
                            <v-col cols="12" sm="12">
                                <v-card class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n10">
                                    <v-toolbar color="rgba(0,0,0,0)" flat class="py-4 ">
                                        <v-toolbar-title class=""> IA </v-toolbar-title>
                                    </v-toolbar>
                                    <v-btn @click.prevent="refrescarIa()" color="orange darken-4 white--text"  
                                    icon>↻</v-btn>
                                    <v-simple-table class="ma-0">
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="text-left">
                                                        notificacion
                                                    </th>
                                                    <th class="text-left">
                                                        Placas del vehiculo
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in IA" :key="item.id">
                                                    <td>{{ item.queja }}</td>
                                                    <td>{{ item.placas }}</td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>

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
                <v-app :style="{ background: $vuetify.theme.themes.light.background }">
                    <v-container>
                        <v-row>


                            <v-col cols="12" sm="12">
                            </v-col>
                            <v-col cols="12" sm="12">
                                <v-toolbar flat color="rgba(0,0,0,0)" class="mt-n5 mb-5">
                                    <v-toolbar-title>Cuenta de notificaciones </v-toolbar-title>
                                    <v-spacer></v-spacer>
                                </v-toolbar>
                                <v-card class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n4 py-4 d-flex align-center justify-center"
                                    color="grey lighten-2" dark flat>
                                    <v-card align="center" color="#F9FAFC" class="rounded-circle border pt-10 " width="200"
                                        height="200" flat>
                                        <v-icon size="60" color="orange">
                                            mdi mdi-car-cog
                                        </v-icon>

                                        <v-card-text class="grey--text text-lg-h6">
                                            Piezas
                                        </v-card-text>

                                        <v-btn color="orange" class="white--text " fab left top>
                                            <h2>6</h2>
                                        </v-btn>
                                    </v-card>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="12">
                                <v-card class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n4 py-4 d-flex align-center justify-center"
                                    color="grey lighten-2" dark flat>
                                    <v-card align="center" color="#F9FAFC" class="rounded-circle border pt-10 " width="200"
                                        height="200" flat>
                                        <v-icon size="60" color="orange">
                                            mdi mdi-brain
                                        </v-icon>

                                        <v-card-text class="grey--text text-lg-h6">
                                            IA
                                        </v-card-text>

                                        <v-btn color="orange" class="white--text " fab left top>
                                            <h2>2</h2>
                                        </v-btn>
                                    </v-card>
                                </v-card>
                            </v-col>
                            <!-- <v-col cols="12" sm="12">
                                <v-card class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n4 "
                                    color="grey lighten-2" flat>
                                    <v-list-item three-line>
                                        <v-list-item-avatar tile size="30">
                                            <v-icon size="30" color="teal">mdi-pill</v-icon>
                                        </v-list-item-avatar>
                                        <v-list-item-content class="pa-2">
                                            <v-list-item-title class="headline mb-1">
                                                Gentle Iron <br>
                                                <h6><span class="teal--text">2 capsules</span> with meals every day</h6>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-card>

                            </v-col> -->
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
        notificationIA: '',
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
            // { text: 'Fat (g)', value: 'fat' },
            // { text: 'Carbs (g)', value: 'carbs' },
            // { text: 'Protein (g)', value: 'protein' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [],
        IA: [],
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
                    queja: 'Aceite de motor',
                    placas: 'AUTE-93-23',
                },
                {
                    queja: 'Bujias',
                    placas: 'AUTE-93-23',
                },
                {
                    queja: 'Aceite de transmision',
                    placas: "AUTE-93-23",
                },
                {
                    queja: 'Filtro de aceite',
                    placas: "AUTE-93-23",
                },
                {
                    queja: 'Balatas',
                    placas: "AUTE-93-23",
                },
                {
                    queja: 'Empaques',
                    placas: "AUTE-93-23",
                },
                {
                    queja: 'Radiador',
                    placas: "AUTE-93-23",
                },
                {
                    queja: 'Anticongelante',
                    placas: "AUTE-93-23",
                },
                {
                    queja: 'Ventilador',
                    placas: "AUTE-93-23",
                },
                {
                    queja: 'Recuperador',
                    placas: "AUTE-93-23",
                },
            ],

             this.IA = [
                {
                    id:1,
                    queja: 'Ocupa cambiar las balatas lo mas antes posible o podrian fallar y causar un accidente',
                    placas: 'AUTE-93-23',
                },
                // {
                //     id:2,
                //     queja: 'El motor podria haber sufrido una torcedura de cabeza por sobrecalentamiento',
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

        refrescarIa(){
            this.notificationIA = {
                 id:3,
                 queja: 'El motor podria haber sufrido una torcedura de cabeza por sobrecalentamientoffff',
                 placas: 'AUTE-93-23',
                },
                console.log(this.notificationIA)
            this.IA.push({
                    id:3,
                    queja: 'El motor podria sufrir una torcedura de cabeza por sobrecalentamiento',
                    placas: 'AUTE-93-23',
                },);
            console.log(this.IA)
        }
    },

};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
}
</style>