<template>
  <v-app >
    <div class="backgruond">
    <SideBarVue :drawer="drawer" />
    <VehiculosVue />
  </div>
  </v-app>
</template>

<script>
import SideBarVue from "../components/SideBarVue";
import VehiculosVue from "../components/VehiculosVue";

export default {
  data: () => ({
    drawer: null, 
  }),

  components: {
    SideBarVue,
    VehiculosVue,
  },
  methods: {},
};
</script>

<style>
  .backgruond{
    background-image: url(@/assets/login.jpg) !important;
    height: 715px;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    background-size: cover;
  }
</style>