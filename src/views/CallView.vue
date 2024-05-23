<template>
  <v-app style="background-color: #EEEEEE;">
    <SideBar />
    <Navbar />
    <v-container>
      <v-row>
        <v-col cols="12" sm="9">
          <v-row>
            <v-col cols="12" sm="12">
              <ContactCall />
            </v-col>
            <v-col cols="12" sm="12">
            <AgendaCall />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="3">
            <MecanicosCall />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
 import SideBar from "@/components/SideBarVue.vue";
 import ContactCall from "../components/ContactCall.vue";
 import AgendaCall from "../components/AgendaCall.vue";
 import MecanicosCall from "../components/MecanicosCall.vue";
export default {
  data: () => ({
    
  }),
 
  components: {
     SideBar,
    // Navbar,
     ContactCall,
     AgendaCall,
     MecanicosCall
},
};
</script>