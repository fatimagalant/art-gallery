<template>
  <h1 id="landing-title">Les Chévres</h1>
  <carousel />
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
</style>
