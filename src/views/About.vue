<template>
  <div>
    <transition-group class="container" tag="ul">
      <li v-for="n in list" :key="n" :class="`item item-${n}`">{{ n }}</li>
    </transition-group>
    <button @click="shuffleList">Shuffle!</button>
  </div>
</template>

<script>
import shuffle from "lodash/shuffle";

export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
  },

  methods: {
    shuffleList() {
      this.list = shuffle(this.list);
    }
  }
};
</script>
