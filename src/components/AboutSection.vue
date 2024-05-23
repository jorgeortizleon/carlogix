<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light display-2">Solucion</h1>
              <h1 class="font-weight-light display-1 mb-3">
                En MecaNet...
              </h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon1.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Podrás buscar un taller mecánico de acuerdo a tus necesidades, ya sea por el modelo de tu vehículo, tipo de reparación o localidad, podrás ver fotos, descripción, localización, especialidades y más información del taller, así como comentarios sobre el mismo, y un historial de todos los trabajos que este ha realizado.
                    <br>La información, el historial de trabajos sumado con los comentarios te ayudaran a escoger el mejor taller para ti

                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon2.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Podrás registrar tus vehículos para que así los mecánicos puedan hacer un historial de todas las reparaciones realizadas al vehículo, este será de manera detallada para saber cuando y poque se hizo tal reparación, llevara el proceso y fotos del antes y después del proceso, así como la autenticidad de todas las piezas usadas  
                    <br>En cuanto te acepten el vehículo a reparación, el historial del trabajo se ira actualizando para saber como va el avance de la reparación del vehículo, y se queda guardada al finalizar

                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon3.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Y todo esto dentro de solo una app
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="@/assets/img/ill1.svg"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
