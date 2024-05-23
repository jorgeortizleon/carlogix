<template>
    <v-app id="inspire">
      <v-container>
      <v-app-bar color="rgba(0,0,0,0)" flat >
           <v-spacer></v-spacer>
           <v-btn icon dark class="">
            </v-btn> 
        </v-app-bar>
      
        <v-row>
          <v-col cols="12" sm="8">
            <v-card
      class="mx-4 rounded-xl pa-4" 
      color="grey lighten-3" flat
    >
    <v-row>
      <v-col cols="12" sm="8">
   <v-list-item three-line>
        <v-list-item-content>
          
          <span class="text-h4 mb-1" v-text="getNombreTaller"></span>
          <span class="text-h8 mb-1" v-text="getDescripcionTaller"></span>
          
          <!--
          <v-list-item-subtitle>Wecome back AAE IdeaPro. We are glad here.<br>
            Inspire the best work in people.enabling them to acheive 
          </v-list-item-subtitle>
          <v-list-item-subtitle> thier goals.
          </v-list-item-subtitle>
          -->
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <!--
        <v-btn
        class="px-3"
          color="blak"
          dark
  
        >
          View Details
        </v-btn>
        -->
      </v-card-actions>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="mx-auto rounded-xl" flat>
        <v-img   height="250" width="300" :src="getImagenTaller" class="mt-n16"  ></v-img>
      </v-card>
      </v-col>
    </v-row>
    </v-card>

    <v-toolbar flat color="rgba(0,0,0,0)" dense class="mt-n1">
     <!-- <v-toolbar-title>Trending Blogs</v-toolbar-title> -->
      <v-spacer></v-spacer>
     <!-- <span class="grey--text">View All</span> -->
    </v-toolbar>
    <v-row class="mt-n5">
      <v-col cols="12" sm="4">
        <v-card
      class="rounded-xl ml-4"
      color="grey lighten-3"
      flat
    >
      <v-card-title>
        <span class="text-h6 ">Contacto</span>
        <span class="text-h6 " v-text="getMecanicoTaller" ></span>
        <span class="text-h6 " v-text="getNumeroTaller" ></span>
      </v-card-title>
  <!--
      <v-card-actions class="mt-n7">
        <v-list-item class="">
          <div color="grey darken-3">
             
               <v-avatar class="ml-n3" size="30">
                <img
                  src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                  alt="John"
                >
              </v-avatar>
              <v-avatar class="ml-n3" size="30">
                <img
                  src="https://cdn.vuetifyjs.com/images/lists/3.jpg"
                  alt="John"
                >
              </v-avatar>
              <v-avatar class="ml-n3" size="30">
                <img
                  src="https://cdn.vuetifyjs.com/images/lists/4.jpg"
                  alt="John"
                >
              </v-avatar>
              <v-avatar class="ml-n3" size="30">
                <img
                  src="https://cdn.vuetifyjs.com/images/lists/2.jpg"
                  alt="John"
                >
              </v-avatar>
              <v-avatar class="ml-n3" color="black" size="30" >
                <span class="caption white--text">+1</span>
              </v-avatar>
          </div>
          <v-row
            align="center"
            justify="end"
          >
          
            <v-icon class="mr-1" small>
         fas fa-hands-wash
            </v-icon>
            <span class="caption">1.5 K</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
  -->
    </v-card>
      </v-col>
      <v-col cols="12" sm="4">
         <v-card
      class="rounded-xl "
      color="black"
      dark
      elevation="10"
    >
      <v-card-title>
        <span class="text-h6 font-weight-light">Calificacion</span>
      </v-card-title>
      <v-divider
          class="mx-2"
          inset
          vertical
         
        ></v-divider>
      <span class="text-h4 mb-4" v-text="getCalificacionTaller"></span>
      <v-icon color="yellow" class="text-h4 mb-5"> mdi-star </v-icon>
  <!--
      <v-card-actions class="mt-n7">
        <v-list-item class="">
          <div color="grey darken-3">
               <v-avatar class="ml-n3" size="30">
                <img
                  src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                  alt="John"
                >
              </v-avatar>
              <v-avatar class="ml-n3" size="30">
                <img
                  src="https://cdn.vuetifyjs.com/images/lists/3.jpg"
                  alt="John"
                >
              </v-avatar>
              <v-avatar class="ml-n3" size="30">
                <img
                  src="https://cdn.vuetifyjs.com/images/lists/4.jpg"
                  alt="John"
                >
              </v-avatar>
              <v-avatar class="ml-n3" size="30">
                <img
                  src="https://cdn.vuetifyjs.com/images/lists/2.jpg"
                  alt="John"
                >
              </v-avatar>
              <v-avatar class="ml-n3" color="white" size="30" >
                <span class="caption black--text">+2</span>
              </v-avatar>
          </div>
          <v-row
            align="center"
            justify="end"
          >
          
            <v-icon class="mr-1" small>
         fas fa-hands-wash
            </v-icon>
            <span class="caption">1.2 K</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
  -->
    </v-card>
      </v-col>
      <v-col cols="12" sm="4">
         <v-card
      class="rounded-xl mr-4"
      color="grey lighten-3"
      flat
    >
      <v-card-title>
        <span class="text-h6 font-weight-light">Ubicacion</span>
      </v-card-title>
  
      <v-card-text class="">
        Espacio
      </v-card-text>
  
      <!--
      <v-card-actions class="mt-n7  ">
        <v-list-item class="">
          <div color="grey darken-3">
               <v-avatar class="ml-n3" size="30">
                <img
                  src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                  alt="John"
                >
              </v-avatar>
              <v-avatar class="ml-n3" size="30">
                <img
                  src="https://cdn.vuetifyjs.com/images/lists/3.jpg"
                  alt="John"
                >
              </v-avatar>
              <v-avatar class="ml-n3" size="30">
                <img
                  src="https://cdn.vuetifyjs.com/images/lists/4.jpg"
                  alt="John"
                >
              </v-avatar>
              <v-avatar class="ml-n3" size="30">
                <img
                  src="https://cdn.vuetifyjs.com/images/lists/2.jpg"
                  alt="John"
                >
              </v-avatar>
              <v-avatar class="ml-n3" color="black" size="30" >
                <span class="caption white--text">+1</span>
              </v-avatar>
          </div>
          <v-row
            align="center"
            justify="end"
          >
            <v-icon class="mr-1" small>
         fas fa-hands-wash
            </v-icon>
            <span class="caption">1.6 K</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
      -->
    </v-card>
      </v-col>
    </v-row>
    <!-- ********* 
    <v-card
      class="mx-4 rounded-xl pa-6 mt-2"
      color="grey lighten-3" flat
    >
  
      <v-sparkline
      :value="value"
      :smooth="radius || false"
      :padding="padding"
      :line-width="width"
      :stroke-linecap="lineCap"
      :fill="fill"
      :type="type"
      :auto-line-width="autoLineWidth"
      auto-draw
      color="black"
      class="mt-n8 mb-n8"
    ></v-sparkline>
    </v-card>
-->
    <v-card
      class="mx-4 rounded-xl pa-6 mt-2"
      color="grey lighten-3" flat
    >
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14964.707258053772!2d-102.03283636213376!3d20.334312983732392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c1fb20b95b08b%3A0xc68ccc23644b191e!2zMjDCsDIwJzExLjUiTiAxMDLCsDAyJzE2LjIiVw!5e0!3m2!1ses-419!2smx!4v1663431569964!5m2!1ses-419!2smx" width="685" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </v-card>

    <v-card
      class="mx-4 rounded-xl pa-4 mt-2" 
      color="grey lighten-3" flat
    >
    <v-row>
      <v-col cols="12" sm="8">
   <v-list-item three-line>
        <v-list-item-content>
          <span class="text-h4 mb-1" >Especialidades</span>
          <span class="text-h8 mb-1" v-text="getEspecialidadesTaller"></span>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
      </v-card-actions>
      </v-col>
      <v-col cols="12" sm="4">
      </v-col>
    </v-row>
    </v-card>
    
          </v-col>
         
           <!-- Recuadro de la derecha -->
          <v-col cols="12" sm="4">
            <v-card class=" rounded-xl pa-4" color="grey lighten-3" flat >
   <div class="px-7">
    <vueper-slides
    :infinite="false"
    
    class="no-shadow"
    :visible-slides="3"
    slide-multiple
    :gap="3"
    :slide-ratio="1 / 4"
    :dragging-distance="200"
    :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
    >
     <template #arrow-left>
     <v-icon class="mr-n15"> mdi-star </v-icon>
    </template>
  
    <template #arrow-right>
     <v-icon class="ml-n15"> mdi-star </v-icon>
    </template>
    <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.src"  />
       
  </vueper-slides>

  <!--Comentarios del taller-->
  <v-list class="mt-n6" color="transparent" dense>
    <span class="text-h6 ">Comentarios</span>
      <v-list-item v-for="comentario in comentarios " :key="comentario.idcomentario">
        <v-list-item-content>
          <v-list-item-title
            v-text="comentario.calificacion"
            class="black--text"
          ></v-list-item-title>
          <v-list-item-subtitle
            v-text="comentario.comentario"
            class="black--text"
          ></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
        <v-btn
        text
        color="deep-black accent-4"
        @click="obtenerServicio(comentario.idcomentario)"
      >
        Mas
      </v-btn>
      </v-list-item-action>
      </v-list-item>
  </v-list>  
   </div>

   <v-card color="white" class="rounded-xl mx-8 pa-3" flat>
      <div class="text-center">
        <v-btn class="mt-5" dark color="black"  @click="desplegarServicios()" >Ver todos</v-btn>
      </div>
   </v-card>

   <v-divider
          class="mx-4"
          inset
          vertical
         
    ></v-divider>

   <!--Servicios que ha hecho el taller-->
   <v-list class="mt-n6" color="transparent" dense>
    <span class="text-h6 ">Trabajos</span>
      <v-list-item v-for="servicio in servicios " :key="servicio.idservicio">
        <v-list-item-content>
          <v-list-item-title
            v-text="servicio.nombre_servicio"
            class="black--text"
          ></v-list-item-title>
          <v-list-item-subtitle
            v-text="servicio.nombre_servicio"
            class="black--text"
          ></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
        <v-btn
        text
        color="deep-black accent-4"
        @click="obtenerServicio(servicio.idservicio)"
      >
        Mas
      </v-btn>
      </v-list-item-action>
      </v-list-item>
  </v-list>  
   
   <v-card color="white" class="rounded-xl mx-8 pa-3" flat>
      <div class="text-center">
        <v-btn class="mt-5" dark color="black"  @click="desplegarServicios()" >Ver todos</v-btn>
      </div>
   </v-card>

   <!--Final del panel derecho-->
    </v-card>
          </v-col>
        </v-row>
        </v-container>

        

        

    </v-app>
  </template>
  
  <script>
    import axios from "axios";
    import { mapGetters } from 'vuex'
    export default {
      name: 'TalllerSingle',
  data: () => ({
    servicios: [],
    comentarios: [],
    select: { state: 'EN' },
        text: 'weekly',
         width: 2,
        radius: 10,
        padding: 8,
        lineCap: 'round',
        value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
        fill: false,
        type: 'trend',
        autoLineWidth: false,
         slides: [
         // {src: require('data:image/jpeg;base64,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')},    
        ],
  }),

      created () {
        axios.get("http://localhost:8181/comentarios/comentariostaller/1").then((resultado) => {
        this.comentarios = resultado.data;
       });

       axios.get("http://localhost:8181/servicios/serviciostaller/1").then((resultado) => {
        this.servicios = resultado.data;
       });
     },

      methods: {
        obtenerServicio(id) {
        console.log(id);
        this.$router.replace("/home");
     },

     desplegarServicios(){
        console.log(this.servicio);
        this.$router.replace("/home");
     },

      },

      components: {
  
      },

      computed:{
    ...mapGetters("taller",[
      "getIdTaller",
      "getNombreTaller",
      "getDescripcionTaller",
      "getImagenTaller",
      "getCalificacionTaller",
      "getNumeroTaller",
      "getMecanicoTaller",
      "getCorreoTaller",
      "getEspecialidadesTaller",
      "getEstadoTaller",
      "getCiudadTaller",
      "getColoniaTaller",
      "getDireccionTaller",
      "getMapaTaller",

    ])
  }
    }
  </script>
  
  <style scoped>
  </style>