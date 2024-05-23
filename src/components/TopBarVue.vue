<template>
  <v-app-bar app elevate-on-scroll elevation="3" color="white">
    <v-app-bar-nav-icon @click="$emit('drawerEvent')"></v-app-bar-nav-icon>
    <v-spacer />
    
      <v-form>
        <v-text-field
          class="p-0 m-0 mt-6"
          full-width
          dense
          append-icon="mdi-magnify"
          outlined
          rounded
          placeholder="Buscar"
          color="blue darken-4"
        />
      </v-form>
    
    <v-spacer />
    <!--v-menu offset-y>
      <template v-slot:activator="{ attrs, on }">
        <span
          class="mx-5 mr-10"
          style="cursor: pointer"
          v-bind="attrs"
          v-on="on"
        >
          <v-badge content="0" color="red" offset-y="10" offset-x="10">
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </span>
      </template>
      <v-list three-line width="250">
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          ></v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          ></v-divider>

          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-menu!-->
    <v-menu offset-y>
      <template v-slot:activator="{ attrs, on }">
        <span style="cursor: pointer" v-bind="attrs" v-on="on">
          <v-chip link>
            <v-badge dot bottom color="green" offset-y="10" offset-x="10">
              <v-avatar size="40">
                <v-img src="@/assets/2.jpg" />
              </v-avatar>
            </v-badge>
            <span class="ml-3" v-text="getNombreUsuario"></span>
          </v-chip>
        </span>
      </template>
      <v-list width="250" class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="@/assets/2.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="getNombreUsuario"></v-list-item-title>
            <v-list-item-subtitle>Activo</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item link v-for="(menu, i) in menus" :key="i" router :to="menu.route">
          <v-list-item-icon>
            <v-icon color="blue darken-4">{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ menu.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "TopBarVue",
  data() {
    return {
      menus: [
        { title: "Perfil", icon: "mdi-account", route: "/" },
        { title: "Cambiar contraseña", icon: "mdi-key", route: "/" },
        { title: "Ajustes", icon: "mdi-cog", route: "/" },
        { title: "Cerrar sesion", icon: "mdi-logout", route: "/login" },
      ],
      items: [
        //Ejemplo de lo que contiene la barra de notificaciones
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "titulo",
          subtitle: `<span class="text--primary">subtitulo</span> &mdash; contenido `,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'titulo <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">subtitulo</span> &mdash; contenido`,
        },
        //-----------
      ],
    };
  },
  computed:{
    ...mapGetters("usuario",[
      "getNombreUsuario",
      "getId",
     
    ])
  }
};
</script>

<style scoped></style>