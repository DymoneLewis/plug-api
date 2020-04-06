import Vue from 'vue';
import _ from 'lodash';

const initalState = {
  userInfo: {
    userId: 0,
    account: '',
    userName: '',
    avatar: '',
    role: [],
    introduce: '',
  },
};

const getters = {
  userInfo(state) {
    return state.initalState;
  },
};

const mutations = {
  setUserInfo(state, payload = {}) {
    const {
      userId = 0,
      account,
      userName,
      avatar,
      role = [],
      introduce = '这个家伙很懒，什么都没留下',
    } = payload;

    state.userInfo = {
      userId,
      account,
      userName,
      avatar,
      role,
      introduce,
    };
  },
  updateUserInfo(state,payload = {}) {
    _.forEach(payload, (value, key) => {
      Vue.set(state.userInfo, key, value);
    });
  },
};

const actions = {};

export default {
  namespaces: true,
  state: initalState,
  getters,
  mutations,
  actions,
}