export const products = {
  namespaced: true,
  state: {
    products_arr : []
  },

  getters: {
    
  },

  mutations: {
    productsUpdate(state, payload) {
        state.products_arr = payload;
    }
  },
};
