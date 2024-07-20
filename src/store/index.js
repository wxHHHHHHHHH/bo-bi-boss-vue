// store/index.js

import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const state = {
  isLoggedIn: false,
  user: {}
};

const mutations = {
  login(state, data) {
    state.isLoggedIn = true;
    state.user = data;
    console.log(data)
    Vue.$cookies.set('user', data); // 将用户信息保存到 cookie
    
  },
  logout(state) {
    state.isLoggedIn = false;
    state.user = null;
    Vue.$cookies.remove('user'); // 清除保存的用户信息
  }
};

const actions = {
  login({ commit }, data) {
    commit('login', data);
  },
  logout({ commit }) {
    commit('logout');
  }
};

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  user: state => state.user
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
