<template>
  <section id="landing">
    <div id="home">
      <div class="content-inner">
        <h1 id="landing-title">Les Chévres</h1>
      </div>
    </div>
  </section>
  <h1 id="text">Our Featured work</h1>
  <carousel />
</template>
<script>
import carousel from "../components/carousel.vue";
export default {
  components: { carousel },
};
</script>
<style scoped>
#text {
  font-size: 3rem;
}
div#home {
  display: flex;
  justify-content: center;
}

.content-inner {
  display: flex;
  width: 90rem;
  height: 22.5rem;
  margin: 5rem;
  border: 1px solid black;
  background-color: #a89b9d;
  justify-content: center;
  background-attachment: fixed;
}
.section h1 {
  font-size: 200px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
}
#landing-title {
  font-size: 15rem;
  font-family: "Cormorant SC", serif;
  color: #816c61;
  /* text-shadow: 0 20px 40px rgba(0, 0, 0, 0.493); */
  text-shadow: 2px 2px 4px black;
}
#home {
  background-color: white !important;
}
@media only screen and (max-width: 1200px) {
  #landing-title {
    font-size: 5rem;
    font-family: "Cormorant SC", serif;
  }
}
</style>
