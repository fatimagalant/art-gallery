<template>
  <div v-if="pieces">
    <h1>All of our pieces</h1>
    <div v-for="piece in pieces" :key="piece.id">
      <h2>{{ piece.artName }}</h2>
      <img v-bind:src="piece.imgURL" alt="" />
    </div>
  </div>
  <div v-else>
    <h1>Loading...</h1>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getAllArt");
  },
  computed: {
    pieces() {
      return this.$store.state.pieces;
    },
  },
};
</script>
<style></style>
