
export default {

    namespaced: true,
      state: () => ({
        servicio: {}
      }),
    
    mutations: {
        SET_servicio(state, nuevo_servicio) {
          console.log(nuevo_servicio);
          state.servicio= nuevo_servicio;
        }
        
    },

    getters:{
      getIdServicio(state){
        return state.servicio.idservicio
      },

      getFechaServicio(state){
        return state.servicio.fecha
      },

      getFechaFinServicio(state){
        return state.servicio.fecha_fin
      },

      getIdTallerServicio(state){
        return state.servicio.idtaller
      },

      getIdVehiculoServicio(state){
        return state.servicio.idvehiculo
      },

      getKilometrajeServicio(state){
        return state.servicio.kilometraje_actual
      },

      getMotivoServicio(state){
        return state.servicio.motivo
      },

      getNombreServicio(state){
        return state.servicio.nombre_servicio
      },

      getProcesoServicio(state){
        return state.servicio.proceso
      },
    }
  }
    