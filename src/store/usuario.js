
export default {

    namespaced: true,
      state: () => ({
        usuario: {}
      }),
    
    mutations: {
        SET_USUARIO(state, nuevo_usuario) {
          console.log(nuevo_usuario);
          state.usuario= nuevo_usuario;
        }
        
    },

    getters:{
      getNombreUsuario(state){
        return state.usuario.usuario
      },
      getId(state){
        return state.usuario.id
      }
    }
  }
    