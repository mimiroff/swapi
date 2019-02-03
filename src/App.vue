<template>
  <div id="app">
    <button v-if="show" @click="listStarships">List Starships</button>
  </div>
</template>

<script>
import axios from "./axios";

export default {
  computed: {
    starships() {
      this.$store.getters.starships()
    };
  },
  methods: {
    listStarships() {
      console.log(this.starships);
    },
    loadData(path) {
      axios.get(path).then(res => {
        this.$store.dispatch('addStarships', res.data.results);
        if (res.data.next) {
          this.loadData(res.data.next);
        }
        this.show = true;
      });
    }
  },
  mounted() {
    this.loadData('starships/');
  }
};
</script>

<style lang="scss">
</style>
