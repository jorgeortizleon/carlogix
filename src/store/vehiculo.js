
export default {

    namespaced: true,
      state: () => ({
        vehiculo: {}
      }),
    
    mutations: {
        SET_vehiculo(state, nuevo_vehiculo) {
          console.log(nuevo_vehiculo);
          state.vehiculo= nuevo_vehiculo;
        }
    
    },

    getters:{
      getIdVehiculo(state){
        return state.vehiculo.idvehiculo
      },

      getMarcaVehiculo(state){
        return state.vehiculo.marca
      },

      getModeloVehiculo(state){
        return state.vehiculo.modelo
      },

      getAnioVehiculo(state){
        return state.vehiculo.anio
      },

      getKilometrajeVehiculo(state){
        return state.vehiculo.kilometraje
      },

      getImagenVehiculo(state){
        return state.vehiculo.imagen
      },

      getUsuarioVehiculo(state){
        return state.vehiculo.idusuario
      }
      
    }
  }
    