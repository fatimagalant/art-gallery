<template>
  <Artists />
</template>
<script>
import Artists from "../components/Artists.vue";
export default {
  components: {
    Artists,
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #7b5dc054;
}
.card-display {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding-top: 40px;
  padding: 20px;
}
#img {
  padding-bottom: 10px;
  width: 500px;
  height: 500px;
}

@media only screen and (max-width: 600px) {
  #img {
    width: 15rem;
    height: auto;
  }
}
</style>
