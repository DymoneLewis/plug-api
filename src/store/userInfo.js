import Vue from 'vue';
import _ from 'lodash';

const initalState = {
  account: '',
  username: '',
  head: '',
  role: '',
  introduction: '',
};

const getters = {
  userInfo(state) {
    return state.initalState;
  },
};

const mutations = {
  initUserInfo(state, payload = {}) {
    _.assign(state, payload);
  },
  updateUserInfo(state, payload = {}) {
    _.forEach(payload, (value, key) => {
      Vue.set(state, key, value);
    });
  },
};

const actions = {
  getUserInfo({ commit }, data) {
    commit('updateUserInfo', data);
    return '';
  },
};

export default {
  namespaces: true,
  state: initalState,
  getters,
  mutations,
  actions,
};
