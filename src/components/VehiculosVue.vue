<template>
  <v-app style="background-color: #EEEEEE;">
    <v-container>
      <v-divider vertical color="white" inset></v-divider>

      <!-- parte superior con titulo y formulario -->
      <v-row justify="right">

        

        <h1 class="black--text">Mis Vehiculos</h1>
        <!-- <v-divider
          class="mx-4"
          inset
          vertical
          color=""
        ></v-divider> -->
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          persistent
          max-width="600px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
            color="orange darken-1"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Agregar vehiculo
            </v-btn>
            <v-btn color="orange darken-1" text @click="flecha()" > ↻ </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Agregar los datos del vehiculo</span>
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
                      label="Marca"
                      v-model="marca"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      label="Modelo"
                      v-model="modelo"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      label="Año"
                      v-model="anio"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      label="Kilometraje"
                      v-model="kilometraje"
                      required
                    ></v-text-field>
                  </v-col>
                
                    <v-file-input
                      accept="image/*"
                      label="File input"
                    ></v-file-input>

                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="black darken-1"
                text
                @click="dialog = false"
              >
                Cerrar
              </v-btn>
              <v-btn
                color="black darken-1"
                text
                @click="dialog = false,crear(marca, modelo, anio, kilometraje, imagen)"
              >
                Agregar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!-- fin de la parte superior-->

      <v-divider vertical color="white" inset></v-divider>
      <v-divider color="orange"></v-divider>

      <!--<v-divider color="grey"></v-divider>-->
      <v-divider vertical color="green" inset></v-divider>
      <v-row class="mt-n14">
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(vehiculo, i) in vehiculos"
          :key="i"
        >
          <v-card
            class="mx-auto my-12"
            max-width="374"
            color="white"
          >
            <v-img height="170" :src="vehiculo.imagen" ></v-img>

            <!--
            <v-toolbar color="transparent" class="mt-n7" flat>
              <v-avatar color="white" rounded class="mr-2">
                <v-img :src="vehiculo.pic" contain></v-img>
              </v-avatar>
              <v-spacer></v-spacer>
              <v-avatar color="black" rounded class="mr-2" dark>
                <div class="three">
                  <div class="four">
                    <span class="white--text caption">{{ vehiculo.price }}</span>
                  </div>
                  <div class="five">
                    <span class="green--text caption">HOLD</span>
                  </div>
                </div>
              </v-avatar>
            </v-toolbar>
            -->

            <v-card-title class="grey--text caption">{{
              vehiculo.marca +" "+  vehiculo.modelo +" "+ vehiculo.anio 
            }}<br> Km {{ vehiculo.kilometraje }}
            </v-card-title>

            <!-- <v-card-text class="mt-n6">
              <v-chip-group
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip label dark>Km {{ vehiculo.kilometraje }}</v-chip>
                <v-chip label dark>{{ vehiculo.idusuario }}</v-chip>
                <v-spacer></v-spacer>
              </v-chip-group>
            </v-card-text> -->

      <v-btn color="orange darken-1" text @click="borrar(vehiculo.idvehiculo)">borrar</v-btn>   
      <v-divider
          class="mx-4"
          inset
          vertical
         
        ></v-divider>
        
      <v-btn color="orange darken-1" text @click="obtenerVehiculo(vehiculo.idvehiculo)">Ver mas</v-btn>   

            <!--<v-row justify="center">
              <v-dialog
                v-model="dialogBorrar"
                persistent
                max-width="290"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    Borrar
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="text-h5">
                    Borrar
                  </v-card-title>
                  <v-card-text>Una vez precionado el boton de aceptar, se borrará el vehiculo, esta accion no se puede deshacer</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="green darken-1"
                      text
                      @click="dialogBorrar = false"
                    >
                      Cancelar
                    </v-btn>
                    <v-btn
                      color="green darken-1"
                      text
                      @click="dialogBorrar = false, borrar(vehiculo.idvehiculo)"
                    >
                      Aceptar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>-->

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from 'vuex'
import axios from "axios";
export default {
  name: "VehiculosVue",
  data: () => ({
    selection: 1,
    vehiculos: [],
    dialog: false,
    dialogBorrar: false,
  
  }),

  created () {
    console.log(this.getId);
      axios.get("http://localhost:8181/vehiculos/obtenerVehiculos/"+this.getId).then((resultado) => {
        this.vehiculos = resultado.data;
      });
    },

  components: {

  },

  methods: {
    ...mapMutations("vehiculo", ["SET_vehiculo"]),
    //...mapMutations("servicio", ["SET_servicio"]),

     crear(marca, modelo, anio, kilometraje, imagen) {
      axios.post("http://localhost:8181/vehiculos/crear?marca=" + marca + "&modelo=" + modelo+ "&anio=" + anio + "&kilometraje=" + kilometraje + "&imagen=" + imagen + "&idusuario=" + this.getId).then(() => {
       });
     },

     borrar(id) {
      axios.get("http://localhost:8181/vehiculos/borrar/"+id).then(() => {
      });
     },

     obtenerVehiculo(id) {
      axios.get("http://localhost:8181/vehiculos/obtenerdatos/"+id).then((resultado) => {
        this.SET_vehiculo(resultado.data);
      });
      
      /*axios.get("http://localhost:8181/servicios/obtenerServicios/"+id).then((resultado) => {
        this.SET_servicio(resultado.data);
      });*/

      this.$router.replace("/vehiculosingle");
     },

    flecha() {
     console.log(this.getId);
      axios.get("http://localhost:8181/vehiculos/obtenerVehiculos/"+this.getId).then((resultado) => {
        this.vehiculos = resultado.data;
      });
    },



  },

  computed:{
    ...mapGetters("usuario",[
      "getId",
    ])
  }
};

</script>
<style scoped>
.v-tab.withoutupercase {
  text-transform: none !important;
}

.v-tabs {
  width: 50% !important;
}
.v-btn.withoutupercase {
  text-transform: none !important;
}
/*div{
  display:inline-block;
  float:left;
  color:#fff;
  font-size:10px;
}*/
.three {
  width: 50px;
  height: 50px;
}
.four {
  width: 50px;
  height: 25px;
  background: black;
}
.five {
  width: 50px;
  height: 25px;
  background: #042a0f;
}
.six {
  width: 50px;
  height: 25px;
  background: #2c2107;
}
</style>