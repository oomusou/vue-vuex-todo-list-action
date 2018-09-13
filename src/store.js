import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    setTodos(state, payload) {
      state.todos = payload;
    },
    addItem(state, payload) {
      state.todos.push({ title: payload, completed: false });
    },
    finishItem(state, index) {
      state.todos[index].completed = true;
    },
  },
  actions: {
    fetchTodos({ commit }) {
      const endpoint = 'https://jsonplaceholder.typicode.com/todos';

      const response = res => commit('setTodos', res.data.slice(0, 5));

      const error = e => console.log(e);

      axios
        .get(endpoint)
        .then(response)
        .catch(error);
    },
  },
});
