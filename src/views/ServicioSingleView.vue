<template>
    <v-app >
      <SideBarVue :drawer="drawer" />
      <ServicioSingle />
    </v-app>
  </template>
  
  <script>
  import SideBarVue from "../components/SideBarVue";
  import ServicioSingle from "../components/ServicioSingle";
  
  export default {
    data: () => ({
      drawer: null, 
    }),
  
    components: {
      SideBarVue,
      ServicioSingle,
    },
    methods: {},
  };
  </script>
  