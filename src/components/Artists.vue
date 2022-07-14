<template>
  <div class="artists"></div>
  <section id="artists-intro">
    <p class="header">artists</p>
    <div class="container">
      <p class="intro">Les Chévres represents artists whose</p>
      <p class="intro">deep connection to nature serves as</p>
      <p class="intro">their primary source of inspiration.</p>
    </div>
  </section>
  <section id="Artists">
    <div class="row">
      <div class="col">1</div>
      <div class="col">1</div>
      <div class="col">1</div>
      <div class="col">1</div>
      <div class="col">1</div>
      <div class="col">1</div>
      <div class="col">1</div>
    </div>
  </section>
</template>
<script></script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@500&family=Finlandica&family=Lato&family=Oswald:wght@300&display=swap");
#artists-intro {
  font-size: 4rem;
  padding-top: 10rem;
  font-family: "Cormorant SC", serif;
  background-color: beige;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
}
.header {
  font-size: 2rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.intro {
  color: black;
  z-index: 100;
  padding: none;
}
@media screen and (max-width: 550px) {
  .intro {
    font-size: 3rem;
  }
}
.container {
  border: 1px solid rgba(0, 0, 0, 0.685);
  z-index: -2;
  max-width: 70rem;
  max-height: 60rem;
}

#artists {
  min-height: 100vh;
}
</style>
