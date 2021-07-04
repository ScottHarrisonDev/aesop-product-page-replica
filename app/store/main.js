export default {
  state () {
    return {
      content: null,
      navigation: null,
      product: null,
      cart: {
        open: false,
        items: [],
        notification: false
      }
    }
  },
  actions: {
    getContent ({ commit }) {
      return this.$axios.$get(`/content/product-page`).then((response) => {
        commit("setContent", response);
      });
    },
    getNavigation ({ commit }) {
      return this.$axios.$get(`/navigation/main`).then((response) => {
        commit("setNavigation", response);
      });
    },
    getProduct ({ commit }, slug) {
      return this.$axios.$get(`/products/${slug}`).then((response) => {
        commit("setProduct", response);
      });
    },
    toggleCart ({ commit }, current) {
      return commit("toggleCart", ! current);
    },
    addToCart ({ commit }, sku) {
      return commit("addToCart", sku);
    },
    removeItem ({ commit }, sku) {
      return commit("removeItem", sku);
    },
    toggleNotification ({ commit }, current) {
      return commit("toggleNotification", ! current);
    },
    updateQuantity ({ commit }, payload) {
      return commit("updateQuantity", payload);
    }
  }
  ,
  mutations: {
    setContent (state, payload) {
      state.content = payload;
    },
    setNavigation (state, payload) {
      state.navigation = payload;
    },
    setProduct (state, payload) {
      state.product = payload;
    },
    toggleCart (state, payload) {
      state.cart.open = payload;
    },
    addToCart (state, payload) {
      state.cart.items.push(payload);
    },
    removeItem (state, payload) {
      state.cart.items = state.cart.items.filter(sku => {
        return sku !== payload;
      });
    },
    toggleNotification (state, payload) {
      state.cart.notification = payload;
    },
    updateQuantity (state, { sku, quantity }) {
      const skuRemoved = state.cart.items.filter(item => {
        return item !== sku;
      });
      let toAdd = new Array(parseInt(quantity));
      toAdd = toAdd.fill(sku);
      state.cart.items = skuRemoved.concat(toAdd);
    }
  }
}
