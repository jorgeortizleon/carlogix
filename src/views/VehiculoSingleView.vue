<template>
    <v-app >
      <SideBarVue :drawer="drawer" />
      <VehiculoSingle />
      <SideBarRight />
    </v-app>
  </template>
  
  <script>
  import SideBarVue from "../components/SideBarVue";
  import SideBarRight from "../components/SideBarRight";
  import VehiculoSingle from "../components/VehiculoSingle";
  
  export default {
    data: () => ({
      drawer: null, 
    }),
  
    components: {
      SideBarVue,
      VehiculoSingle,
      SideBarRight,
    },
    methods: {},
  };
  </script>
  