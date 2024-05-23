<template>
  <v-app >
    <SideBarVue :drawer="drawer" />
    <TalleresVue />
  </v-app>
</template>

<script>
import SideBarVue from "../components/SideBarVue";
import TalleresVue from "../components/TalleresVue";

export default {
  data: () => ({
    drawer: null, 
  }),

  components: {
    SideBarVue,
    TalleresVue,
  },
  methods: {},
};
</script>
