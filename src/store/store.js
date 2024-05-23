import Vue from 'vue'
import Vuex from 'vuex'
import usuario from "./usuario";
import vehiculo from "./vehiculo";
import taller from "./taller";
import servicio from "./servicio";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    usuario,
    vehiculo,
    taller,
    servicio
  }
})
