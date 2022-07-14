<template>
<div id="home">
  <h1 id="landing-title">Les Chévres</h1>
  <carousel />
  </div>
</template>

<script>
import carousel from "../components/carousel.vue";
export default {
  components: { carousel },
};
</script>
<style scoped>
#landing-title {
  font-size: 8rem;
  font-family: "Cormorant SC", serif;
}
#home{
  background-color:white!important;
}
</style>
