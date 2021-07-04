export default {
  state () {
    return {
      content: null,
      navigation: null,
      product: null
    }
  },
  actions: {
    getContent ({ commit }) {
      return this.$axios.$get(`/content/product-page`).then((response) => {
        commit('setContent', response)
      })
    },
    getNavigation ({ commit }) {
      return this.$axios.$get(`/navigation/main`).then((response) => {
        commit('setNavigation', response)
      })
    },
    getProduct ({ commit }, payload) {
      return this.$axios.$get(`/products/${payload.slug}`).then((response) => {
        commit('setProduct', response)
      })
    }
  },
  mutations: {
    setContent (state, payload) {
      state.content = payload
    },
    setNavigation (state, payload) {
      state.navigation = payload
    },
    setProduct (state, payload) {
      state.product = payload
    }
  }
}
