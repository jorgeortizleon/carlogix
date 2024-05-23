<template>
  <v-navigation-drawer app color="white" right width="290">
    <v-toolbar color="rgba(0,0,0,0)" flat>
      <v-toolbar-title>Salud por pieza</v-toolbar-title>
    </v-toolbar>

    <v-card class=" mx-2 rounded-l-xl pb-1 " flat color="#EEEEEE" @click="clickpieza()">
      <v-row>
        <v-col cols="12" sm="8">
          <v-list-item two-line class="mt-n4">
            <v-list-item-content>
              <v-list-item-title class="  ">
                Balatas
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="12" sm="4">
          <v-progress-circular :size="50" :width="3" :value="this.balatas" :color="color(this.balatas)"
            class="ml-n5 mt-n1 ">
            {{ this.balatas }}
          </v-progress-circular>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="  mx-2 rounded-l-xl pb-1 mt-5 " flat color="#EEEEEE">
      <v-row>
        <v-col cols="12" sm="8">
          <v-list-item two-line class="mt-n4">
            <v-list-item-content>
              <v-list-item-title class="  ">
                Llantas
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="12" sm="4">
          <v-progress-circular :size="50" :width="3" :value="this.llantas" :color="color(this.llantas)"
            class="ml-n5 mt-n1 ">
            {{ this.llantas }}
          </v-progress-circular>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="  mx-2 rounded-l-xl pb-1 mt-5 " flat color="#EEEEEE">
      <v-row>
        <v-col cols="12" sm="8">
          <v-list-item two-line class="mt-n4">
            <v-list-item-content>
              <v-list-item-title class="  ">
                Bujias
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="12" sm="4">
          <v-progress-circular :size="50" :width="3" :value="this.bujias" :color="color(this.bujias)"
            class="ml-n5 mt-n1 ">
            {{ this.bujias }}
          </v-progress-circular>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="  mx-2 rounded-l-xl pb-1 mt-5 " flat color="#EEEEEE">
      <v-row>
        <v-col cols="12" sm="8">
          <v-list-item two-line class="mt-n4">
            <v-list-item-content>
              <v-list-item-title class="  ">
                Aceite del motor
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="12" sm="4">
          <v-progress-circular :size="50" :width="3" :value="this.bujias" :color="color(this.balatas)"
            class="ml-n5 mt-n1 ">
            {{ this.balatas }}
          </v-progress-circular>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="  mx-2 rounded-l-xl pb-1 mt-5 " flat color="#EEEEEE">
      <v-row>
        <v-col cols="12" sm="8">
          <v-list-item two-line class="mt-n4">
            <v-list-item-content>
              <v-list-item-title class="  ">
                Filtro de aire
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="12" sm="4">
          <v-progress-circular :size="50" :width="3" :value="this.bujias" :color="color(this.llantas)"
            class="ml-n5 mt-n1 ">
            {{ this.llantas }}
          </v-progress-circular>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="  mx-2 rounded-l-xl pb-1 mt-5 " flat color="#EEEEEE">
      <v-row>
        <v-col cols="12" sm="8">
          <v-list-item two-line class="mt-n4">
            <v-list-item-content>
              <v-list-item-title class="  ">
                Bandas
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="12" sm="4">
          <v-progress-circular :size="50" :width="3" :value="this.bujias" :color="color(this.bujias)"
            class="ml-n5 mt-n1 ">
            {{ this.bujias }}
          </v-progress-circular>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="  mx-2 rounded-l-xl pb-1 mt-5 " flat color="#EEEEEE">
      <v-row>
        <v-col cols="12" sm="8">
          <v-list-item two-line class="mt-n4">
            <v-list-item-content>
              <v-list-item-title class="  ">
                Amortiguadores
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="12" sm="4">
          <v-progress-circular :size="50" :width="3" :value="this.bujias" :color="color(this.balatas)"
            class="ml-n5 mt-n1 ">
            {{ this.balatas }}
          </v-progress-circular>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="  mx-2 rounded-l-xl pb-1 mt-5 " flat color="#EEEEEE">
      <v-row>
        <v-col cols="12" sm="8">
          <v-list-item two-line class="mt-n4">
            <v-list-item-content>
              <v-list-item-title class="  ">
                Alternador
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="12" sm="4">
          <v-progress-circular :size="50" :width="3" :value="this.bujias" :color="color(this.llantas)"
            class="ml-n5 mt-n1 ">
            {{ this.llantas }}
          </v-progress-circular>
        </v-col>
      </v-row>
    </v-card>

    <div class="mt-10 mx-3">
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn rounded small block v-bind="attrs" v-on="on">
            Ver mas
          </v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="orange">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Panel completo de la salud de las piezas</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
            </v-toolbar-items>
          </v-toolbar>

          <v-list three-line subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-center display-2">Servicio de motor</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-container>
            <v-row>
              <v-col v-for="card in servicioDeMotor" :key="card.id" cols="12" sm="6" md="4" lg="3">
                <v-card class=" mx-2 rounded-l-xl pb-1 " flat color="#EEEEEE" @click="clickpieza(card.id)">
                  <v-row>
                    <v-col cols="12" sm="8">
                      <v-list-item two-line class="mt-n4">
                        <v-list-item-content>
                          <v-list-item-title class="  ">
                            {{ card.nombre_parte }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-progress-circular :size="50" :width="3" :value="card.percentage" :color="color(card.percentage)"
                        class="ml-n5 mt-n1 ">
                        {{ card.percentage }}
                      </v-progress-circular>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <v-divider></v-divider>
          <v-list three-line subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-center display-2">Servicio transmisión </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-container>
            <v-row>
              <v-col v-for="card in servicioTrasmision" :key="card.id" class="justify-center align-self-center">
                <v-card class=" mx-2 rounded-l-xl pb-1 " flat color="#EEEEEE" @click="clickpieza(card.id)">
                  <v-row>
                    <v-col cols="12" sm="8">
                      <v-list-item two-line class="mt-n4">
                        <v-list-item-content>
                          <v-list-item-title class="  ">
                            {{ card.nombre_parte }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-progress-circular :size="50" :width="3" :value="card.percentage" :color="color(card.percentage)"
                        class="ml-n5 mt-n1 ">
                        {{ card.percentage }}
                      </v-progress-circular>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <v-divider></v-divider>
          <v-list three-line subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-center display-2">Enfriamiento </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-container>
            <v-row>
              <v-col v-for="card in enfriamiento" :key="card.id" cols="12" sm="6" md="4" lg="3">
                <v-card class=" mx-2 rounded-l-xl pb-1 " flat color="#EEEEEE" @click="clickpieza(card.id)">
                  <v-row>
                    <v-col cols="12" sm="8">
                      <v-list-item two-line class="mt-n4">
                        <v-list-item-content>
                          <v-list-item-title class="  ">
                            {{ card.nombre_parte }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-progress-circular :size="50" :width="3" :value="card.percentage" :color="color(card.percentage)"
                        class="ml-n5 mt-n1 ">
                        {{ card.percentage }}
                      </v-progress-circular>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <v-divider></v-divider>
          <v-list three-line subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-center display-2">Suspensión</v-list-item-title>
                <v-list-item-subtitle class="text-center display-1">Delantero</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-container>
            <v-row>
              <v-col v-for="card in suspenciondelantera" :key="card.id" cols="12" sm="6" md="4" lg="3">
                <v-card class=" mx-2 rounded-l-xl pb-1 " flat color="#EEEEEE" @click="clickpieza(card.id)">
                  <v-row>
                    <v-col cols="12" sm="8">
                      <v-list-item two-line class="mt-n4">
                        <v-list-item-content>
                          <v-list-item-title class="  ">
                            {{ card.nombre_parte }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-progress-circular :size="50" :width="3" :value="card.percentage" :color="color(card.percentage)"
                        class="ml-n5 mt-n1 ">
                        {{ card.percentage }}
                      </v-progress-circular>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          
          <v-list three-line subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle class="text-center display-1">Trasera</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-container>
            <v-row>
              <v-col v-for="card in suspenciontrasera" :key="card.id" cols="12" sm="6" md="4" lg="3">
                <v-card class=" mx-2 rounded-l-xl pb-1 " flat color="#EEEEEE" @click="clickpieza(card.id)">
                  <v-row>
                    <v-col cols="12" sm="8">
                      <v-list-item two-line class="mt-n4">
                        <v-list-item-content>
                          <v-list-item-title class="  ">
                            {{ card.nombre_parte }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-progress-circular :size="50" :width="3" :value="card.percentage" :color="color(card.percentage)"
                        class="ml-n5 mt-n1 ">
                        {{ card.percentage }}
                      </v-progress-circular>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <v-divider></v-divider>
          <v-list three-line subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-center display-2">Frenos</v-list-item-title>
                <v-container>
            <v-row>
              <v-col v-for="card in frenos" :key="card.id" class="justify-center align-self-center">
                <v-card class=" mx-2 rounded-l-xl pb-1 " flat color="#EEEEEE" @click="clickpieza(card.id)">
                  <v-row>
                    <v-col cols="12" sm="8">
                      <v-list-item two-line class="mt-n4">
                        <v-list-item-content>
                          <v-list-item-title class="  ">
                            {{ card.nombre_parte }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-progress-circular :size="50" :width="3" :value="card.percentage" :color="color(card.percentage)"
                        class="ml-n5 mt-n1 ">
                        {{ card.percentage }}
                      </v-progress-circular>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

                <v-list-item-subtitle class="text-center display-1">Delantero</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-container>
            <v-row>
              <v-col v-for="card in frenosDelantero" :key="card.id" cols="12" sm="6" md="4" lg="3">
                <v-card class=" mx-2 rounded-l-xl pb-1 " flat color="#EEEEEE" @click="clickpieza(card.id)">
                  <v-row>
                    <v-col cols="12" sm="8">
                      <v-list-item two-line class="mt-n4">
                        <v-list-item-content>
                          <v-list-item-title class="  ">
                            {{ card.nombre_parte }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-progress-circular :size="50" :width="3" :value="card.percentage" :color="color(card.percentage)"
                        class="ml-n5 mt-n1 ">
                        {{ card.percentage }}
                      </v-progress-circular>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          
          <v-list three-line subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle class="text-center display-1">Trasera</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-container>
            <v-row>
              <v-col v-for="card in frenosTrasero" :key="card.id" cols="12" sm="6" md="4" lg="3">
                <v-card class=" mx-2 rounded-l-xl pb-1 " flat color="#EEEEEE" @click="clickpieza(card.id)">
                  <v-row>
                    <v-col cols="12" sm="8">
                      <v-list-item two-line class="mt-n4">
                        <v-list-item-content>
                          <v-list-item-title class="  ">
                            {{ card.nombre_parte }} fff
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-progress-circular :size="50" :width="3" :value="card.percentage" :color="color(card.percentage)"
                        class="ml-n5 mt-n1 ">
                        {{ card.percentage }}
                      </v-progress-circular>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

        </v-card>
      </v-dialog>
    </div>



  </v-navigation-drawer>
</template>
  
<script>
import axios from "axios";
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    suspenciondelantera: [
      { id: 1, nombre_parte: 'Amortiguadores', percentage: 70 },
      { id: 2, nombre_parte: 'Bases de  amortigudores', percentage: 67 },
      { id: 3, nombre_parte: 'Resortes', percentage: 82 },
      { id: 4, nombre_parte: 'Horquilla superior', percentage: 57 },
      { id: 5, nombre_parte: 'Horquilla inferior', percentage: 44 },
      { id: 6, nombre_parte: 'Bujes horquilla superior', percentage: 90 },
      { id: 7, nombre_parte: 'Rotula superior', percentage: 76 },
      { id: 8, nombre_parte: 'Rotula inferior', percentage: 12 },
      { id: 9, nombre_parte: 'Buje flotante bujes inferiores traseros', percentage: 96 },
      { id: 10, nombre_parte: 'Tornillo estabilizador', percentage: 87 },
      { id: 11, nombre_parte: 'Barra larga', percentage: 43 },
      { id: 12, nombre_parte: 'Barra corta', percentage: 24 },
      { id: 13, nombre_parte: 'Brazo auxiliar', percentage: 75 },
      { id: 14, nombre_parte: 'Brazo pitman', percentage: 44 },
      { id: 15, nombre_parte: 'Vieleta ', percentage: 19 },
      { id: 16, nombre_parte: 'Maza delantera', percentage: 67 },
    ],
    suspenciontrasera: [
      { id: 17, nombre_parte: 'Amortiguadores', percentage: 70 },
      { id: 18, nombre_parte: 'Bases de  amortigudores', percentage: 64 },
      { id: 19, nombre_parte: 'Resortes', percentage: 79 },
      { id: 20, nombre_parte: 'Tornillo estabilizador', percentage: 60 },
      { id: 21, nombre_parte: 'Maza trasera', percentage: 47 }
    ],
    frenos: [
      { id: 22, nombre_parte: 'Bomba de frenos', percentage: 88 },
      { id: 23, nombre_parte: 'Líquido de frenoss', percentage: 76 }
    ],
    frenosDelantero: [
      { id: 24, nombre_parte: 'Tambor/Disco', percentage: 78 },
      { id: 25, nombre_parte: 'Balata ', percentage: 37 },
      { id: 26, nombre_parte: 'Pistón', percentage: 77 },
      { id: 27, nombre_parte: 'Mordaza ', percentage: 67 }
    ],
    frenosTrasero: [
      { id: 28, nombre_parte: 'Tambor/Disco', percentage: 87 },
      { id: 29, nombre_parte: 'Balata ', percentage: 23 },
      { id: 30, nombre_parte: 'Pistón', percentage: 55 },
      { id: 31, nombre_parte: 'Mordaza ', percentage: 37 }
    ],
    servicioDeMotor: [
      { id: 32, nombre_parte: 'Aceite de motor', percentage: 23 },
      { id: 33, nombre_parte: 'Bujías', percentage: 23 },
      { id: 34, nombre_parte: 'Filtro aceite', percentage: 79 },
      { id: 35, nombre_parte: 'Filtro aire', percentage: 60 },
      { id: 36, nombre_parte: 'Filtro gasolina', percentage: 88 }
    ],
    servicioTrasmision: [
      { id: 37, nombre_parte: 'Aceite de transmisión ', percentage: 23 },
      { id: 38, nombre_parte: 'Filto de aceite', percentage: 23 }
    ],
    enfriamiento: [
      { id: 39, nombre_parte: 'Radiador', percentage: 23 },
      { id: 40, nombre_parte: 'Anticongelante', percentage: 18 },
      { id: 41, nombre_parte: 'Ventilador', percentage: 27 },
      { id: 42, nombre_parte: 'Recuperador', percentage: 11 }
    ],
    dialog: false,
    balatas: 0,
    llantas: 0,
    bujias: 0,
  }),

  created() {
    axios.post("http://localhost:8181/partes_vehiculo/vida-util?nombre_parte=balatas&idVehiculo=1&id=1").then((resultado) => {
      this.balatas = (resultado.data + 10);
    });

    axios.post("http://localhost:8181/partes_vehiculo/vida-util?nombre_parte=balatas&idVehiculo=1&id=1").then((resultado) => {
      this.llantas = ((resultado.data - 24));
    });

    axios.post("http://localhost:8181/partes_vehiculo/vida-util?nombre_parte=balatas&idVehiculo=1&id=1").then((resultado) => {
      this.bujias = ((resultado.data - 47));
    });
  },

  methods: {

    clickpieza(id) {
      /*console.log(id);
      axios.get("http://localhost:8181/vehiculos/obtenerdatos/"+id).then((resultado) => {
        this.SET_vehiculo(resultado.data);
      });
      
      axios.get("http://localhost:8181/servicios/obtenerServicios/"+id).then((resultado) => {
        this.SET_servicio(resultado.data);
      });*/

      console.log(id)
      this.$router.replace("/homee");
    },

    calcVidaUtil(km){
      return km + 10
    },


  },

  computed: {
    ...mapGetters("vehiculo", [
      "getIdVehiculo",
    ]),

    color() {
      return (numero) => {
        if (numero < 25) {
          return 'red';
        } else if (numero < 50) {
          return '#d9d102';
        } else {
          return 'green';
        }
      };
    },
  },

}
</script>
  
<style></style>