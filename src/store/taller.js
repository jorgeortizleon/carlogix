
export default {

    namespaced: true,
      state: () => ({
        taller: {}
      }),
    
    mutations: {
        SET_TALLER(state, nuevo_taller) {
          state.taller= nuevo_taller;
        }
    
    },

    getters:{
      getIdTaller(state){
        return state.taller.idtaller
      },

      getNombreTaller(state){
        return state.taller.nombre_taller
      },

      getDescripcionTaller(state){
        return state.taller.descripcion_taller
      },

      getNumeroTaller(state){
        return state.taller.numero_mecanico
      },

      getMecanicoTaller(state){
        return state.taller.nombre_mecanico
      },

      getCorreoTaller(state){
        return state.taller.correo_mecanico
      },

      getCalificacionTaller(state){
        return state.taller.calificacion
      },

      getEspecialidadesTaller(state){
        return state.taller.Especialidades
      },

      getEstadoTaller(state){
        return state.taller.Estado
      },

      getCiudadTaller(state){
        return state.taller.ciudad
      },

      getColoniaTaller(state){
        return state.taller.colonia
      },

      getDireccionTaller(state){
        return state.taller.direccion
      },

      getImagenTaller(state){
        return state.taller.imagen_taller
      },

      getMapaTaller(state){
        return state.taller.mapa
      },

    }
    
  }
    