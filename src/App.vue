<template>
  <div id="app">
    <input type="text" v-model="input"><button @click="addItem">Add</button>
    <ul>
      <li v-for="(item, index) in todos" @click="finishItem(index)" :key="index">
        {{ item.title }}, {{ item.completed }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      input: '',
    };
  },
  computed: mapState(['todos']),
  methods: {
    addItem() {
      this.$store.commit('addItem', this.input);
      this.input = '';
    },
    finishItem(index) {
      this.$store.commit('finishItem', index);
    },
  },
  mounted() {
    this.$store.dispatch('fetchTodos');
  },
};
</script>

<style>
</style>
