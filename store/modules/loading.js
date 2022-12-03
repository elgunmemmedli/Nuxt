export const loading = {
  namespaced: true,
  state: {
    loading : false
  },

  getters: {
    
  },

  mutations: {
    loadingUpdate(state, payload) {
        state.loading = payload;
    }
  },
};
