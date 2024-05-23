<template>
  <v-app id="inspire">
   
   <SideBarLeft />
   <SideBarRight />

    
      <v-container>   
     <v-row class="mt-n9">

      <v-col cols="12" sm="15">      
      <!--<v-toolbar
        color="black"
        dark
      >
        <h1 class="ml-1">Talleres</h1>
        <v-icon class="ml-1" small>fas fa-wrench</v-icon>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">   
        </v-toolbar-items>
      </v-toolbar>-->

         </v-col>
       </v-row>
       <!--********************************************************* -->

       <v-divider
          class="mx-2"
          inset
          vertical
         
        ></v-divider>

    <v-row class="mt-n6">
      <v-col  cols="12"
          xs="18"
          sm="6"
          md="12"
          lg="4"
          v-for="(taller, i) in talleres"
          :key="i" >
        <v-hover v-slot="{ hover }" open-delay="200">
            <v-card max-width="800" color="grey lighten-3" :elevation="hover ? 16 : 2">
               <v-app-bar flat color="rgba(0,0,0,0)">
                 <v-chip
                 @click="obtenerTaller()"
                class="ma-2"
                color="black"
                text-color="white"
                dense
              >
                <v-avatar left>
                  <v-icon color="yellow">mdi-star</v-icon>
                </v-avatar>
                {{taller.calificacion}}
                </v-chip>
                <v-spacer></v-spacer>
                
     <v-btn
                class=""
                fab
                
                x-small
                color="white"
              >
      <v-icon>
        mdi-heart
      </v-icon>
    </v-btn>
               </v-app-bar>
               <div class="d-flex flex-column justify-space-between align-center">
                 <v-img height="170" :src="taller.imagen_taller" ></v-img>
               </div>
                <v-app-bar flat color="rgba(0,0,0,0)">
                <h2 class="ml-5 mt-n5">{{taller.nombre_taller}}</h2> 
                <v-chip
                class="ma-2"
                color="grey lighten-3"
                text-color="black"
                dense
              >
                {{taller.idtaller}}
                </v-chip>       
                </v-app-bar>
      <v-btn
        text
        color="blue darken-1"
        @click="obtenerTaller(taller.idtaller)"
      >
        Ver mas
      </v-btn>
               
            </v-card>
          </v-hover>
      </v-col>
      
    </v-row>
    <!--
    <div class="d-flex flex-column justify-space-between align-center">
       <v-btn
                    class="px-15 mt-2"
                    rounded
                    outlined
                    color="green"
                    dark
                    
                    >
                    <v-icon class="mr-1">
                      fas fa-spinner
                    </v-icon>
                   Load More
                    </v-btn>
    </div>
    -->
    </v-container>
  </v-app>
</template>

<script>
import { mapMutations } from "vuex";
import axios from "axios";
export default {
  name: "TalleresVue",
  data: () => ({
    selection: 1,
    talleres: [],
  
  }),

  created () {
      axios.get("http://localhost:8181/talleres").then((resultado) => {
        this.talleres = resultado.data;
      });
    },

  components: {

  },

  methods: {
    ...mapMutations("taller", ["SET_TALLER"]),

    obtenerTaller(id) {
      axios.get("http://localhost:8181/talleres/obtenerdatos/"+id).then((resultado) => {
        this.SET_TALLER(resultado.data);
      });

      this.$router.replace("/tallersingle");
     },


  },
};
</script>