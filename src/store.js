import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      'I have a pen',
      'I have an apple',
      'ahh apple-pen',
    ],
  },
  mutations: {
    addItem(state, payload) {
      state.todos.push(payload);
    },
    removeItem(state, index) {
      state.todos.splice(index, 1);
    },
  },
  actions: {

  },
});
