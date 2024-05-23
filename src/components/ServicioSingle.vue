<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <v-layout row>
      <v-flex md3>
        <v-app style="background-color: #EEEEEE;">
          <v-container>
            <v-flex>
              <v-card class="ma-5 text-center mt-12" shaped elevation="10">
                <v-avatar class="mt-n7" size="60" elevation="10">
                  <img
                    src="https://www.shutterstock.com/image-vector/autoparts-gear-auto-piston-spark-600w-1623130876.jpg" />
                </v-avatar>
                <v-card-title class="layout justify-center">AUTOPARTES Rafa</v-card-title>
                <v-card-subtitle class="layout justify-center">Rafa Hernandez</v-card-subtitle>
                <!-- <v-list>
                  <v-list-item>
                    <v-list-item-title class="cyan--text text--darken-1">Blood</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">height</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">Weight</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="mt-n5">
                    <v-list-item-subtitle>-B</v-list-item-subtitle>
                    <v-list-item-subtitle>170 cm</v-list-item-subtitle>
                    <v-list-item-subtitle>60 Kg</v-list-item-subtitle>
                  </v-list-item>
                </v-list> -->
              </v-card>
            </v-flex>
            <v-flex>
              <!-- <v-list color="transparent" class="text-center">
                <v-list-item>
                  <v-list-item-title class="cyan--text text--darken-1">Notifications</v-list-item-title>
                  <v-list-item-subtitle>26 Aug 2019</v-list-item-subtitle>
                </v-list-item>
              </v-list> -->
            </v-flex>
            <v-flex>
              <v-card class="ma-5" shaped elevation="10">
                <v-list>
                  <!-- <v-list-item>
                    <v-list-item-avatar size="10" color="cyan darken-1"></v-list-item-avatar>
                    <v-list-item-title class="ml-n2">Kognum</v-list-item-title>
                    <v-list-item-subtitle>10 mg</v-list-item-subtitle>
                  </v-list-item> -->
                  <v-list-item>
                    <v-list-item-title class="orange--text text--darken-1">Trabajo</v-list-item-title>
                    <!-- <v-list-item-title class="cyan--text text--darken-1">WED</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">FRI</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">SUN</v-list-item-title> -->
                  </v-list-item>
                  <v-list-item class="mt-n5">
                    <v-list-item class="grey--text text-subtitle-2">{{ getNombreServicio }}</v-list-item>
                  </v-list-item>
                  <v-divider></v-divider>
                </v-list>
                <v-list two-line subheader>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="orange--text text--darken-1">Kilometraje</v-list-item-title>
                      <v-list-item-subtitle>{{ getKilometrajeServicio }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-list two-line subheader class="mt-n8">
                  <v-list-item>
                    <v-list-item-title class="orange--text text--darken-1">Fecha inicio</v-list-item-title>
                    <v-list-item-title class="orange--text text--darken-1">Fecha fin</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="mt-n10">
                    <v-list-item-title>{{convertirFechaATexto(getFechaServicio)}} </v-list-item-title>
                    <v-list-item-title>{{ convertirFechaATexto(getFechaFinServicio) }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-flex>
            <v-flex>
              <div>
                <v-date-picker range elevation="15" color="orange" class="ma-4 text-center " v-model="dates"
                  readonly="true" no-title="true" :events="functionEvents"></v-date-picker>
              </div>
            </v-flex>
          </v-container>
        </v-app>
      </v-flex>
      <v-flex md9>
        <v-app style="background-color: #FFFFFF;" class="rounded-border">
          <v-container>
            <v-flex>
              <v-list class="mt-5">
                <v-list-item>
                  <v-list-item-title class="orange--text text--darken-1">Trabajo</v-list-item-title>
                  <!-- <v-list-item-action>
                    <v-btn class="ma-2" tile outlined color="cyan darken-1">
                      <v-icon left>fas fa-eye</v-icon>See All
                    </v-btn>
                  </v-list-item-action> -->
                </v-list-item>
              </v-list>
            </v-flex>
            <v-flex>
              <v-row no-gutters>
                <v-col cols="12" md="4">
                  <v-row>
                    <v-col cols="12" md="2">
                      <v-card height="80px" width="10px" color="orange"></v-card>
                    </v-col>
                    <v-col cols="12" md="10">
                      <v-list two-line subheader class="ml-n8">
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title class="orange--text text--darken-1">Motivo</v-list-item-title>
                            <v-list-item class="grey--text text-subtitle-2">{{ getMotivoServicio }}</v-list-item>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="4">
                  <v-row>
                    <v-col cols="12" md="2">
                      <v-card height="80px" width="10px" color="grey"></v-card>
                    </v-col>
                    <v-col cols="12" md="10">
                      <v-list two-line subheader class="ml-n8">
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title class="orange--text text--darken-1">Processo</v-list-item-title>
                            <v-list-item class="grey--text text-subtitle-2">{{ getProcesoServicio }}</v-list-item>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="4">
                  <v-row>
                    <v-col cols="12" md="2">
                      <v-card height="80px" width="10px" color="orange"></v-card>
                    </v-col>
                    <v-col cols="12" md="10">
                      <v-list two-line subheader class="ml-n8">
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title class="orange--text text--darken-1">Piesas cambiadas</v-list-item-title>
                            <!-- agregar a la bd las piezas intercambiadas y hacer su respectivo endpoint para mostrar los aqui abajo -->
                            <v-list-item-subtitle class="grey--text text-subtitle-2">tornillos estabilizadores</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex>
              <v-list class="mt-5">
                <!-- para hacer espacio xd -->
              </v-list>
            </v-flex>
            <v-flex>
              <div>
                <v-row>
                  <v-col cols="6">
                    <div class="card-wrapper">
                      <h2 class="card-title orange--text text--darken-1 large-text">Antes</h2>
                      <v-card>
                        <v-carousel height="330" cycle hide-delimiter-background delimiter-icon="mdi-minus"
                          show-arrows-on-hover>
                          <v-carousel-item v-for="(item, i) in card1Items" :key="i">
                            <!-- Carousel content here -->
                            <v-img :src="item.src" height="330"></v-img>
                          </v-carousel-item>
                        </v-carousel>
                      </v-card>
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="card-wrapper">
                      <h2 class="card-title orange--text text--darken-1">Despues</h2>
                      <v-card>
                        <v-carousel height="330" cycle hide-delimiter-background delimiter-icon="mdi-minus"
                          show-arrows-on-hover>
                          <v-carousel-item v-for="(item, i) in card2Items" :key="i">
                            <!-- Carousel content here -->
                            <v-img :src="item.src" height="330"></v-img>
                          </v-carousel-item>
                        </v-carousel>
                      </v-card>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-flex>
          </v-container>
        </v-app>
      </v-flex>
    </v-layout>
  </v-app>
</template>
  
<script>
import axios from "axios";
import { mapGetters } from 'vuex'

export default {
  name: 'ServicioSingle',
  data: () => ({
    dates: ['2022-11-11', '2022-11-15'],
    servicios: [],
    comentarios: [],
    select: { state: 'EN' },
    text: 'weekly',
    slides: [
      // {src: require('data:image/jpeg;base64,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')},    
    ],

    card1Items: [
      { src: "https://aftermarket.zf.com/remotemedia/master-content/mc-lf/technology-in-practice-7/useful-tips-5/replace-stabilizer-link/2-einspruehen-1_text_image_50_large_560px_no_ratio.jpg?v=3338076290" },
      { src: "https://aftermarket.zf.com/remotemedia/master-content/mc-lf/technology-in-practice-7/useful-tips-5/replace-stabilizer-link/5-kugelzapfen-oben-rausdruecken-1_text_image_50_large_560px_no_ratio.jpg?v=3713117576" },
      { src: "https://previews.123rf.com/images/malkovkosta/malkovkosta1612/malkovkosta161200098/66984503-sensor-de-la-rejilla-fija-mec%C3%A1nico-de-autom%C3%B3viles-coche-en-soporte-con-ruedas-para-sensores-de.jpg" },
    ],
    card2Items: [
      { src: "https://aftermarket.zf.com/remotemedia/master-content/mc-lf/technology-in-practice-7/useful-tips-5/replace-stabilizer-link/9-schraube-unten-festziehen-1_text_image_50_large_560px_no_ratio.jpg?v=372620964" },
      { src: "https://aftermarket.zf.com/remotemedia/master-content/mc-lf/technology-in-practice-7/useful-tips-5/replace-stabilizer-link/10-rad-abmontieren-1_text_image_50_large_560px_no_ratio.jpg?v=705320542" },
      { src: "https://www.muchoneumatico.com/blog/wp-content/uploads/2020/10/queesparaleloenuncoche-660x330.jpg" },
    ],
  }),

  created() {
    axios.get("http://localhost:8181/comentarios/comentariostaller/1").then((resultado) => {
      this.comentarios = resultado.data;
    });
  },

  methods: {
    obtenerServicio(id) {
      console.log(id);
      this.$router.replace("/home");
    },

    desplegarServicios() {
      console.log(this.servicio);
      this.$router.replace("/home");
    },

    convertirFechaATexto(fecha) {
      const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

      const dia = new Date(fecha).getDate();
      const mes = meses[new Date(fecha).getMonth()];
      const anio = new Date(fecha).getFullYear();

      return `${dia+1} de ${mes} de ${anio}`;
    }

  },

  components: {

  },

  computed: {
    ...mapGetters("servicio", [
      "getIdServicio",
      "getFechaServicio",
      "getFechaFinServicio",
      "getIdTallerServicio",
      "getIdVehiculoServicio",
      "getKilometrajeServicio",
      "getMotivoServicio",
      "getNombreServicio",
      "getProcesoServicio",

    ])
  }
}
</script>
  
<style scoped>
.rounded-border {
  border-radius: 10px;
  overflow: hidden;
}

.card-wrapper {
  display: flex;
  flex-direction: column;
}

.card-title {
  margin-bottom: 16px;
}

.large-text {
  font-size: 23px;
}
</style>