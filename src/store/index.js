import Vue from "vue";
import Vuex from "vuex";

import cartService from "@/services/cart-service.js";
import pictureService from "@/services/picture-service.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pictures: [],
    cartItems: JSON.parse(localStorage.getItem("cart-items")) || [],
  },

  getters: {
    pictures(state) {
      return state.pictures;
    },

    cartItems(state) {
      return new Set(state.cartItems);
    },
  },

  mutations: {
    setPictures(state, pictures) {
      state.pictures = pictures;
    },

    addToCart(state, id) {
      state.cartItems.push(id);
    },

    removeFromCart(state, id) {
      state.cartItems = state.cartItems.filter((item) => item !== id);
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

    async addToCart({ commit }, id) {
      try {
        const responce = await cartService.addToCart(id);

        if (responce.success) {
          console.log("add");
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
          console.log("remove");
          commit("removeFromCart", id);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
