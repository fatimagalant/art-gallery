<template>
  <h1>All of our pieces</h1>
  <div v-for="piece in pieces" :key="piece.id"></div>
</template>
<script>
export default {
  data() {
    return {
      pieces: [],
    };
  },
  mounted() {
    fetch("https://http://localhost:3000/pieces")
      .then((response) => response.json())
      .then((json) => console.log(json));
  },
};
</script>
<style></style>
