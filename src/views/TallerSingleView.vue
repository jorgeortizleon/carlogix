<template>
    <v-app >
      <SideBarVue :drawer="drawer" />
      <TallerSingle />
    </v-app>
  </template>
  
  <script>
  import SideBarVue from "../components/SideBarVue";
  import TallerSingle from "../components/TallerSingle";
  
  export default {
    data: () => ({
      drawer: null, 
    }),
  
    components: {
      SideBarVue,
      TallerSingle,
    },
    methods: {},
  };
  </script>
  