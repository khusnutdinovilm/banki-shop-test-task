import Vue from "vue";
import Vuex from "vuex";

import cartService from "@/services/cart-service.js";
import pictureService from "@/services/picture-service.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pictures: [],
    cartItems: new Set(JSON.parse(localStorage.getItem("cart-items")) || []),
  },

  getters: {
    pictures(state) {
      return state.pictures;
    },

    cartItems(state) {
      return state.cartItems;
    },
  },

  mutations: {
    setPictures(state, pictures) {
      state.pictures = pictures;
    },

    addToCart(state, id) {
      state.cartItems.add(id);
    },

    removeFromCart(state, id) {
      state.cartItems.delete(id);
    },
  },

  actions: {
    async fetchPictures({ commit }) {
      try {
        const pictures = await pictureService.fetchPictures();
        commit("setPictures", pictures);
      } catch (error) {
        console.error(error);
      }
    },

    searchPictures({ state }, searchQuery) {
      return state.pictures.filter((picture) => picture.title.includes(searchQuery));
    },

    async addToCart({ commit }, id) {
      try {
        const responce = await cartService.addToCart(id);

        if (responce.success) {
          commit("addToCart", id);
        }
      } catch (error) {
        console.error(error);
      }
    },

    async removeFromCart({ commit }, id) {
      try {
        const responce = await cartService.removeFromCart(id);

        if (responce.success) {
          commit("removeFromCart", id);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
