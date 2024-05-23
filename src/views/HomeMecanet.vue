<template>
  <v-app style="background-color: #EEEEEE;">
    <SideBarVue :drawer="drawer" />
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto rounded-xl mt-7" flat >
            <v-parallax
              height="625"
              dark
              src="@/assets/carlogix2.png"
            >
              <v-row
                align="center"
                justify="center"
            >
              <!-- <v-col
                class="text-center"
                cols="12"
              >
                <h1 class="text-h4 font-weight-thin mb-4">
                  Bienvenido a MECANET
                </h1>
                <h4 class="subheading">
                  Donde su seguridad es nuestra prioridad.
                  
                </h4>
              </v-col> -->
             </v-row>
            </v-parallax>
          </v-card>
          <v-spacer></v-spacer>
          <!-- Seccion de categorias, agregar componente -->
          <v-toolbar flat color="transparent">
            <!-- <v-toolbar-title class="text-h6">Categorias</v-toolbar-title> -->
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="toggle_exclusive" group color="#49D9A0">
              <v-btn>
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-toolbar>

          <!-- Seccion de populares, agregar componente -->
          <v-toolbar flat color="transparent" class="mt-5">
            <v-toolbar-title class="text-h6">Populares</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn rounded color="green" dark class="px-8">Ver mas</v-btn>
          </v-toolbar>

          <!-- Seccion de cerca de mi, agregar componente -->
          <v-card flat color="#E2F2E5" class="rounded-xl mt-8">
            <v-toolbar flat color="transparent" class="mb-4">
              <v-toolbar-title class="text-h6 mt-5"
                >Cerca de mi ubicación </v-toolbar-title
              >
              <v-spacer></v-spacer>
            </v-toolbar>

          </v-card>

          <!-- Seccion de comentarios de la app, agregar componente -->
          <v-card flat color="#FAFAFA" class="mt-8 py-5 px-16">
            <div
              style="
                position: absolute;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
              "
            >
              <h3>Comentarios sobre la app web</h3>
            </div>

          </v-card>

        <!-- Algo para despues 
          <v-card
            flat
            color="#E2F2E5"
            class="rounded-xl mtop mbottom mx-10 pa-4"
            height="350"
          >
            <v-row>
              <v-col cols="12" xs="12" sm="12" md="5">
                <v-card
                  class="rounded-xl mt-n16 ml-16 mobile"
                  outlined
                  flat
                  height="450"
                  width="200"
                >
                  <v-img src="mobile.png"></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" xs="12" sm="6" md="7">
                <h1 class="mt-16">Download App</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                  Provident sequi esse tempore maiores quasi quia non.<br />
                  Itaque laboriosam dicta nostrum accusantium assumenda,<br />
                  vitae ab ut vel tenetur minima natus commodi!
                </p>
                <v-btn color="black" dark class="mb-10">
                  <v-icon color="white" left>fab fa-apple</v-icon>
                  App Store
                </v-btn>
                <v-btn color="black" dark class="ml-4 mb-10">
                  <v-icon color="white" left>fab fa-google-play</v-icon>
                  Play Store
                </v-btn>
              </v-col>
            </v-row>
          </v-card>                  -->

        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import SideBarVue from "../components/SideBarVue";

export default {
  data: () => ({
    drawer: null, 
  }),

  components: {
    SideBarVue,
  },
  methods: {},
};
</script>
