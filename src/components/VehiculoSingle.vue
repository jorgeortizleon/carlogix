<template>
  <v-app id="inspire" style="background-color: #EEEEEE;">
    <v-container>

      <div class="flex w-full min-h-screen font-sans bg-gray-100">
        <main class="flex flex-col flex-1 gap-3 p-4">
          <header>
            <h1 class="text-3xl font-semibold leading-loose text-gray-700">Panel de monitoreo</h1>
          </header>
          <v-divider color="orange"></v-divider>
        </main>
      </div>

      <div>
                    <a href="http://127.0.0.1:1880/ui/#!/0?socketid=HM5GEOmh3eal_Av7AAAB" target="_blank" class="q-btn">Ver sensores</a>
                  </div>



      <v-row>
        <v-col cols="12" sm="12">
          <v-app-bar color="rgba(0,0,0,0)" flat class="">
          </v-app-bar>
        </v-col>
        <v-col cols="12" sm="12">
          <v-card class="mx-12 rounded-tl-xl rounded-tr-xl mt-n15">
            <v-list-item three-line>
              <v-list-item-content class="pa-10">
                <v-list-item-title class="headline mb-1">
                  {{ getMarcaVehiculo }} {{ getModeloVehiculo }} <span class="orange--text">{{ getAnioVehiculo }}</span>
                </v-list-item-title>
                <v-list-item-subtitle>
                  Kilometraje: <span class="orange--text">{{ getKilometrajeVehiculo }}</span> 
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  Placas: <span class="orange--text"> {{ getIdVehiculo }} </span> 
                  <!--En la linea de arriba poner {{ getKilometrajeVehiculo }} para que asigne las placas de la BD -->
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  Servicios: <span class="orange--text">{{ 12 }}</span>
                  <!--En la linea de arriba poner una consulta para contar los servicios y ahi ponerlos  -->
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar tile size="150" width="220" class="pr-10">
                <img :src="getImagenVehiculo">
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12">
          <v-card class="mx-12  rounded-bl-xl rounded-br-xl mt-n10">
            <v-app-bar color="rgba(0,0,0,0)" flat class="ma-8">
              <h5 class="headline mb-1">Servicios realizados a tu vehiculo</h5>
            </v-app-bar>
            <v-list class="mx-11 mt-n12" color="transparent" dense>
              <v-list-item v-for="servicio in servicios " :key="servicio.idservicio">
                <v-list-item-content>
                  <v-list-item-title v-text="servicio.nombre_servicio" class="black--text"></v-list-item-title>
                  <v-list-item-subtitle v-text="convertirFechaATexto(servicio.fecha)" class="black--text"></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn text color="orange accent-4" @click="obtenerServicio(servicio.idservicio)">
                    Mas
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>

            <!-- <v-card color="white" class="rounded-xl mx-8 pa-3" flat>
              <div class="text-center">
                <v-btn class="mt-5" dark color="orange" @click="desplegarServicios()">Ver todos</v-btn>
              </div>
            </v-card> -->

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

  name: 'VehiculoSingle',
  data: () => ({
    dialog: false,
    servicios: [],
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
      // {src: require('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhISEhIPEhIREQ8RDxESERESEREPGBQZGRgUGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGhISHjQrISE0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKMBNgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAEAQAAIBAgMEBQgHBwUBAAAAAAABAgMRBBIhMUFRYQVxkaHRBhUiUoGSscETFjJTcnPSFDM0YqKy4QcjgsLxQv/EABsBAAICAwEAAAAAAAAAAAAAAAIDAAEEBQYH/8QAOBEAAwABAQUFBAcIAwAAAAAAAAECEQMEBRIhMRNBUZGxFSJhgTJTcXKhosEGIzNSYoLh8BRC0f/aAAwDAQACEQMRAD8AfYKKIkEkax0djkJINRAQ2DFuwGRRDUQlEZGIt2A2IlS3oDKbFEkqSfWLdFK8GSwVOVnftClBrRkURbsLOTZCzV0EomajPK+W9G6Kvqiu0EVyM1ejdXW1d6MuU6yiYq9HK+T2cuQFX3lxfcBhpWlyent3HQsc2x06Es0U+3rKWoDq8uZnxcLxvwafyMWU7FSndNcU0crKDVhaVcsGrBL0X+J/BGjKLwK0l1o1ZS1qchVv3mcesvSl+J/ElCF5RXO/YFNavrZowMNW+Ct2/wDgKsfVYke4isQ8sXxei6zXlMGMleVt0fiG9QTHNmKwdOlmdu3qLym+jRyrm9X4EV5H1eELyFOJocTPiJ5dFt+AzjFJ55GavK2i27+RmsNaKcScY9chdi407j4Ub6vZ8RuUNUR34GdU7AOJolEBxGqykxDiBKI+SFSYasNCpIBoY0C0MVhi7ECaLD4i8hJBJBqBMhiugMlJBJESCSFOislwk0aKbTEJBJC3YDRqUQlETTqce00ws9gDsU8oGVJNamedJx6tzN6ReRPRi3RSvBzbD8PUyuz2Pu5hVcPbVarvQuwrjwHlUjpU6bk0oq7ey2801OipyVmo8tdjB8nftTXCGnK+07GJxUads17vYktbG42HYo2jTV1nLzyXw5Gp2ranoW1ySWObPP8AmOt/J73+DRhuiqsbpqFnwlvOj5yp8Jd3iTzlT4S7vEzfY2n4V5mK97NrDqfxMvm6f8vaY6nQtVybWSzba1/wdbzlT4S7vEnnKnwl3eJPY2n4V5/4KnenD0pHOwvRVWN75NbbJdZofR8/5e00+cqfCXd4k85U+Eu7xJ7G0/CvP/BVbz4nl1Jx/Mlb+X3jTh+iqkY2eW7d/tG/zlT4S7vEnnKnwl3eJXsXT8K8wq3s6WHU/iZZdHVLaKN93pbzk4vo+pTWaSVm9Xe9meg85U+Eu7xL+njUTstNjUktbg6m54UvGU/HIWlvP3sJp/DvPN4Wjd5nsWzrNbia62FyfZXo/AyVpqK57kc/qzejTi1hr/eXwNnOqtXnPeIrzyrm9niYJK46d27vayowbdkB2hlSsITlH08Pvl2GmnQUeb48OoJoYqBepnoIcQXEe0Z6k0ubGqyJ5AkhM5cCTk34AtBKxqXiKkU0MaBaGKhmRbQLQzKXkGqi8iGixjiQZxF5GJBxRIoJIx3QtsmRMv6LgHFDIoVVAZwZ8tiJGpIjorqE0yuMQkFFtbA3Sa59RSQp0XnI+nWW/TnuNMUc9IdTm47NnDcLdiqjwNqRnq4bfH2rwHUqqlyfAckKrUFcTlheT69Kp+BfE6+IwH0rTzZcqtbLe+/iY+jILNN73FJmyti1TaTe1XOs3LVPZoc9fe9WabeLirbvpyE+Y197/SvEnmNfe/0rxC85x49zJ5zjx7mbn994/gjWY2bw/F/+iMV0VkhKanmy6tZbadpzDtPpOPHuYl4qj6sPdXgNirS95ZE6kaTfuUkcshbtd22XduooeYpCEIQhDb0c/tLqfsMQM5SVnBtNPauAGpHHLkZpanZ2qwdxo4/SOCcW5q7jvXq/4B/b63FdiN+EnOcLys9q2aWNTtu7VraeLxnufh/j4G42Xb1N+5n/AH/eRxKdJy2e18DXCmorT2viaJwUW0laz2IXJpavQ4eqcXUvqm15PBv+040mujAaFVJpbezeVUr+r2maQasZMPvJUqN8kIaGtFKDexDFQ5JIU0C0alQ4lqCW4bLJxoyqm2T6M0yQEkNTJxNiWhbQ6SAaHKgkJaIG0QZxBlqQyLQpBJCKoFo0RCSM8RkZsTVAOTRFDEhEavIbCquoVVC2mNSI6ae1FwknsaGJCaoW3zM8sNwfsYDptbVY2oKxj1ZfaNGBIfTqtbdV3jXh09mnwBeGkufUBniI7l8mdToqaea3BdYvpf7Uer5ldDKzn+FBdLL0o9XzO2/Z9Y2eF971Zz+9VjiX3TnkLsVY6M0JCF2KsQhCF2JYhCiEsXYhCiF2JYhCjsdFfu/bL5HHsdnov937ZfIRtH0PmjK2P+J8mc7H1bVJJavN7Ec+Tb26m7G026k7Jv0mKWE4v2I802ica2o/6q9WdhpOZhfYvQxtBRoSfLrNqppbEUxE6gztPAzKglt1CaHNC5D5orLYtoCSCnNLf8xUqq3Jj1QaTKkgGipVHyFybGzQxIuQqUkRlMcqDSBciEKGZCCRaCjBBqmLorIKCQSp8w1S5oTQDaAQSDVJ8i1Slw7xFFZRSDjNreylTlwYSg+D7BNMHKGQrvfZjoV1vTXeZrBCWsgOEzdTnF717dDTFHLiNg2tja6hunhCa0/BnawkdWZulF6Uer5hdGzbzJu9kjRicHOo04uOitq2vkdpuektCH3e96s0m3xTyl8DkZSZToVOjZxi5Xi7K7s3e3YY7G8m1XQ01adT9JC8pMoyxLFlYF5SZRliWJkmBeUmUZYliZJgXlJlGWNeDw6dpuSTi00rX2a66lVXCssuYdPCMP0b4PsZ1ej1anw1fyN/7Shc53dzF1NV1OMYM/R0FFZTz8jBWXpMzVGltaQOMnLPJXdtdDJI4Pamu1vl3v1Z0Glp+6ufcHUqx6+pCZV+C7QZAWMDhWTKmESVWT39glu4xxfB9hWSXBhyGsIUwWOdKXDvQLpPkPQSaEsFjnSfIp0uY6QsozsFj3T5gOCHSFkUQNxRQ1F5DiMiKiMiDQLGRGIUhkWJoWxqCFqS4oJVFxQmgGhyCQlVY8fiEq8efYY9oFpjw4mb9oXB9xaxHLvMdy8guWbYwXBdiGRpR9VGGOKfBdoyOKlwj3mVp0l1FOLOrg6cU3ZW7R08Tk046mLo2s5OV7aJCem+kKdFxzyabTcYpNyaudluddpoQkvH1Zp9vp6eW34HR84Ln2C/2in6sfdR43FeUrelOCX8z9J9i0XecXE4yrUd5znLle0exaG/jYW+vI0WpvOV05n0x4in6sfdRgaPA0sTVh9ico/hnJI2UunMTH/7TXCcY/HaM/4Tn6LFe0JvHEsHsspdjzVLymmvtU4S/DKUfjc20vKOi/tKcedlJdzv3AVoai7hk7TpP/t58jr5SZTnvpzDWv8ASPqyTv8AAwYryl3Uof8AKb/6rxKnR1H3foXW0aUrLpfLn6HfymPFdJ0aekpxv6sfSl2LZ7TyWK6SrVPtzlb1Y+jG3Cy2+0x5TInZf5n5GJe3d0LzPQ4rykeynTt/NN3furxPSeS2IlUw6nN5pOpNXslpppofOrHv/I3+Fj+ZP5Ctt04jR91d6/UyN2a16m0Pifc/VHQrUo5pNpXfWJlTj6q7EDisTJTktLJvcZ5Yp8F3nmu03Pa39r9WdppxbS+Q2UVwXYKkLliuXeC8QuDNbfNj5ig2CwPp48ynWjx7mFCD4WWwJEdWPFAOS4rtMmUEkSQthti5D5DQLFsNi2OkNAMhbIMDFKTDUnxYpMJMlILAaYSYtMNMTSBDQaYtMOMW9zE0imEmGmSNF8kNhQW9t9wpoW6QtMOKb2XZojTity+IxCKQDsRClJ7rdY+GH4vsDRUqqjtfs3iuJpinVPodDo6Ci5Wvu2nm/Llf7tH8uX9zPQdFVszkraKKPLf6hP8A3aP5Uv7md9+zTzp6f93qznN+S+ytP+n1RwbEsYoVHHY/ZuNNPEJ7dH3HXnHuWhliWDSKk0tW7EByDYqTS2tITUxHq6c3tM7ZA1D7zdFp7Gn7S7HPDjVkt7+JC3HxNtiWM8cS96T7hscTF7br2EBc0g7HvvI7+FX5k/keC+kj60e1HvPI2SeFTWz6Sp8jC3h/B+a/U2W6M/8AIf3X6ofjKKc5O7TfYYp0XuafcasXiEpzT0tJ9QvNc8n2u/32ol/NXqzvdPiUr7F6GKUGtzFtm9i5xT2pMVOWPV+JibKbNM6UeaFSocH2jpkYrQhgthypy4dgtjZkYimC2RsFsdKCRHJ8WU5MjBbHJF4JmZAGyxmC8AoZGLAixsWMckZcY8xsYIWmMTFORbyNgkuA1MSmHFi3ItoamMTM7qpbxcsS92gmkVwNm7NbaBLEpbNfgYXNvay0xNSWtJd5onXk99uoBMqlTctmzi9htpUlHm+ItwRtTyNnQcGnNtWvFWPN/wCoX76j+VL+5nq+jNsvwo8p/qF++o/lS/uZ2v7NrGnp/wB/qzl99vMW/u/oeRIQh1xygcKko7G0VKTerbYJCFYIQhCFkIQhCEIQhCEPpHkL/Bx/Mqf9T5ufSPIX+Dj+ZU/6mFvD+D81+psd2fx/k/VAdJXVWfOTsZlUa2No6mNSc5p6+kznVcP6vYzy3XnOtqfer1Z3ulScSn4L0LjiXvV+oZGrF7H7N5ilptBbBUjezTOg2LbMka0lvv1jFiE9unwHTKK4GhsmLky3K+wCTGqSIGcVwEygNkxcmNUjEKlBgSGSYMmMmRiFNkLbIN4QgUw4sSmEpjakto0RYSkZs5MwpyDwmn6ZbtSnVb3mdMJMVUlcKQxMJMWmaKdLj2C3BG8FQTeiNdKglq9eW4qFlohiYHZiKpvoOTLlUSV29DPOqorX2LiZKlVyevsW5AVAM6br7DvdCV8857koadpm8qPJ+eLlCdOcYuMXCUZ5kmr3TTSZk6KxbpzTs5KSyyS2223R6RdIUvWfus326trjQ0l7yVS31x3v49TU7x2R6tOXLctLp8PsPE/UbEffUPen+kn1GxH31D3p/pPaVOkqUVdyaX4ZeAvzxQ9b+mXgbb2yvrZ85NYtzw+mnX5jx/1GxH31D3qn6SfUbEffUPen+k9tHH02k1J66r0ZeAFTpOlG2aTV9noyfyJ7ZX1s+cleyNPp2dfmPGfUbEfe0Pen+kn1GxH31D3p/pPZ0+lKMnZSbdr/AGZL5Byx9NJtydkrv0ZeBftlfWz5yR7o01y7OvzHifqNiPvqHvT/AEk+o2I++oe9U/Sew88UPW/pl4D/ANup+s/dkV7ZX1s+cke59NddOvzHiPqNiPvqHvT/AEk+o2I++oe9P9J7Op0pRi7Sk1v+zJ/IGHS9Buym7vZ6Ml8ie2V9bPnJfseOvZ1+Y8d9RsR99Q96f6T1vk/0bLC0I0pSjKWaU5ON8t3uV+pGn9vp+s/dl4Cq/StKMXLWXBJW163sF6u841JxWpOPtQzR3ctKs6cPL5d/6nNxVZfSzjsam0uYDZzK1ZzlKb2ybb62xtHE7pex+Jx94u6pd7b82dItFzK+CXoaakFLb27zJUotbNV3mlyBcguzLltGG4LZpqU0+T4macWvHcEowPlpkzWLVZ79RTYLYxSw8I0Z0ypMzNl52NmSuEa2Lkwc5TkNUhJMjZAHIgzhCF5i0xaZaY1yHgamWmKTDjqLcA4GJjIRb5AQSQ5SFvTAbGwSWwapCIyCUgXApoepFVK6jotX8DNOvuXb4CcwtyWtPxHOberKi76Ckzdh6eXV7fgL7MKnhD8PTyrm9vgaFIQpCcTXsrLa+5E4MGNwumDia+Z6bFs5viDQjmklu2vqM+Y24KNk5cdnUL4MsdS4Z5HQuc7GzvO3BJfM15jl1J3bfFtl1ArSjnk2YB+lLq+Zsm7xa5P4GDAP7X/H5mzMRRyB1F7zOZmOphp3hF8rdmhx7m3Az0a4O/b/AOAzA3VnKHY2N433x19m85+Y6bkcurHLJrhs6gq0ytLpg6OHrZo81o/EOTOXSq5Xfdv6joZ7hTINRhmTEU8ruvsvZy5CMxvnqrPYzBWhlfLcy+zGxWeT6jKVdx0eq+Bozp6o52YuNVx2e1BKQnGehvbAkxcaqewpyGKAOEGpBbtDPLQ0OQuTD7MamKbBbLlHgLbDUDEW2VcFspsYpLwE5EAuUM4C8FFoogxlhIdEhBbBYcQ0WQWwAkDWeiIQBg94gJEIAwx2F2rkjcQgInU6hIwV36T62QgLK0+oB1aWxdSIQFE1e4lX7Mvwv4HMIQqiaXRm3AbJdfyNRCBIXqfSZyp7X1v4jsF9p/hfxRCALqOv6LNxhx22PUyEDYrT+kZTZhX6K6yEJPUbqdBrFV9U+pkIGLRgKZZCIySQY9lkGSDQDBZCBlIWxciEDQxCymUQYgyEIQIh/9k=')},    
    ],
  }),

  // created() {
  //   console.log(this.getIdVehiculo);
  //   axios.get("http://localhost:8181/servicios/obtenerServicios/" + 1).then((resultado) => {
  //     this.servicios = resultado.data;
  //   });
  // },

  watch: {
    getIdVehiculo: {
      immediate: true, // Ejecutar la función inmediatamente al iniciar el componente
      handler(newValue, oldValue) {
        // Verificar si el ID del vehículo ha cambiado y es un valor válido (no undefined)
        if (newValue !== oldValue && newValue !== undefined) {
          // Aquí obtienes los servicios para el vehículo con el nuevo ID
          axios.get("http://localhost:8181/servicios/obtenerServicios/" + newValue)
            .then((resultado) => {
              this.servicios = resultado.data;
            })
            .catch((error) => {
              console.error("Error al obtener los servicios:", error);
            });
        }
      },
    },
  },

  methods: {

    ...mapMutations("servicio", ["SET_servicio"]),

    obtenerServicio(id) {
      axios.get("http://localhost:8181/servicios/obtener/" + id).then((resultado) => {
        this.SET_servicio(resultado.data);
      });

      this.$router.replace("/serviciosingle");
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
    ...mapGetters("vehiculo", [
      "getIdVehiculo",
      "getMarcaVehiculo",
      "getModeloVehiculo",
      "getAnioVehiculo",
      "getKilometrajeVehiculo",
      "getImagenVehiculo",
    ]),
  }
}
</script>
  
<style scoped>
.q-btn {
  /* Estilos de Quasar para que el enlace se vea como un botón */
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff9100;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
}

</style>