<template>
  <v-app>
    <div class="background"></div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card elevation="0" class="pa-4" color="transparent">
          
          <div class="text-center">

            <!--<v-card  class="rounded-xl" max-width="150" >
          <v-img height="150" width="150"
            src="@/assets/LogoMecanet.jpg"
          />
        </v-card>-->

            <!-- <v-avatar size="150" color="blue darken-4">
              <v-img src="@/assets/LogoMecanet.jpg"
               />
            </v-avatar> -->
            
            <h2 class="text-center">Bienvenido</h2>
            <h6 class="text-center  grey--text ">Introduzca su correo y su contraseña <br>para entrar a CARLOGIX</h6>
          </div>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text class="mt-3">
              <v-text-field v-model="usuario" :rules="emailRules" type="email" label="Correo" placeholder=" "
                prepend-inner-icon="mdi-account" required />
              <v-text-field v-model="contrasena" :rules="passwordRules" :type="passwordShow ? 'text' : 'password'"
                label="Contraseña" placeholder=" " prepend-inner-icon="mdi-key"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'" @click:append="passwordShow = !passwordShow"
                required />

              <v-row>
                <v-col cols="12" sm="7">
                  <v-checkbox label="Recordar contrasena" class="mt-n1" color="orange"> </v-checkbox>
                </v-col>
                <v-col cols="12" sm="5">
                  <span class="caption orange--text">Olvide mi contraseña</span>
                </v-col>
              </v-row>

            </v-card-text>
            <v-card-actions class="justify-center">

              <v-container fluid class="pa-0">
                <v-row align="center">
                  <v-col cols="12" sm="12">
                    <div class="text-center">
                      <div class="my-2">

                        <v-btn @click.prevent="authentication(usuario, contrasena)"
                          color="orange darken-4 white--text" dark block tile>Inicia Sesion</v-btn>

                          <h5
                          class="text-center  grey--text mt-4 mb-3"
                        >O crea una cuenta</h5>


                        <!-- Boton para crear usuario -->
                      </div>
                      <div class="my-2">
                        <v-dialog v-model="dialog" persistent max-width="600px">
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn outlined color="orange darken-4 white--text" dark v-bind="attrs" v-on="on">
                              Registrar
                            </v-btn>
                          </template>
                          <v-card>
                            <v-card-title>
                              <span class="text-h5">Agregar los datos del Usuario</span>
                            </v-card-title>
                            <v-card-text>
                              <v-container>
                                <v-row>
                                  <v-col cols="12" sm="6">
                                    <v-text-field label="Nombres" v-model="nombres" required></v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="6">
                                    <v-text-field label="Apellidos" v-model="apellidos" hint="campo provicional"
                                      required></v-text-field>
                                  </v-col>

                                  <v-col cols="12">
                                    <v-text-field label="Correo" v-model="correo" required></v-text-field>
                                  </v-col>
                                  <v-col cols="12">
                                    <v-text-field label="Contraseña" v-model="contrasena" hint="Usar 6 caracteres o mas "
                                      type="password" required></v-text-field>
                                  </v-col>

                                </v-row>
                              </v-container>
                            </v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="black darken-1" text @click="dialog = false">
                                Cerrar
                              </v-btn>
                              <v-btn color="black darken-1" text
                                @click="dialog = false, crear(nombres, apellidos, correo, contrasena)">
                                Crear Cuenta
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>

                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-container>

              <!-- fin del boton-->


            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-main>

    <v-snackbar top color="red" v-model="snackbarRed">
      Login incorrecto
    </v-snackbar>



  </v-app>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  name: "App",
  data: () => ({
    dialog: false,
    loading: false,
    snackbar: false,
    snackbarRed: false,
    passwordShow: false,
    usuario: "",
    datosUsuario: {},
    emailRules: [
      v => !!v || "E-mail es requerido",
      v => /.+@.+\..+/.test(v) || "El E-mail debe ser valido",
    ],
    contrasena: "",
    passwordRules: [
      v => !!v || "Contraseña es requerida",
      v => (v && v.length >= 6) || "Contraseña debe ser de 6 o mas caracteres!",
    ],
  }),

  methods: {
    ...mapMutations("usuario", ["SET_USUARIO"]),

    submitHandler() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 3000);
      }
    },

    async authentication(usuario, contrasena) {
      let response = {};
      try {
        response = await axios.post("http://localhost:8181/usuarios/login?usuario=" + usuario + "&passwd=" + contrasena);
        if (response.status === 200) {
          axios.get("http://localhost:8181/usuarios/obtenerdatos/" + usuario).then((resultado) => {
            this.SET_USUARIO(resultado.data);
          });
          this.$router.replace("/homee");
        }
      } catch (error) {
        this.snackbarRed = true;
      }
    },

    crear(nombres, contrasena, correo) {
      axios.post("http://localhost:8181/usuarios/crearusuario?nombre=" + nombres + "&correo=" + correo + "&contrasena" + contrasena).then(() => {
      });
    },
  },

  components: {

  }
};
</script>

<style>
.background {
  background-image: url(@/assets/loginBackground.jpeg) !important;
  height: 715px;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  background-size: cover;
}
</style>
<!-- https://wallpapercave.com/wp/wp8204143.png -->