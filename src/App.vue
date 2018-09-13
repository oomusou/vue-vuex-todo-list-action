<template>
  <div id="app">
    <input type="text" v-model="input"><button @click="addItem">Add</button>
    <ul>
      <li v-for="(item, index) in todos" @click="removeItem(index)" :key="index">{{ item }}</li>
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
    removeItem(index) {
      this.$store.commit('removeItem', index);
    },
  },
};
</script>

<style>
</style>
