<template>
  <div class="artists"></div>
  <section id="artists-intro">
    <div id="intro">
      <p class="header">artists</p>
      <div class="container">
        <p class="intro">Les Chévres represents artists whose</p>
        <p class="intro">deep connection to nature serves as</p>
        <p class="intro">their primary source of inspiration.</p>
      </div>
    </div>
  </section>
  <section id="Artists">
    <h1 class="artist-heading">Meet Our Artists</h1>
    <div class="container">
      <section>
        <div class="row">
          <div class="col-6">
            <div class="card">
              <img src="https://i.postimg.cc/B6ntP1Gv/Allistairr.jpg" />
              <h1 class="text-muted">Allistair</h1>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://i.postimg.cc/nhztbYZT/image.png" />
              <h1 class="text-muted">Nanor</h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-6">
            <div class="card">
              <img src="https://i.postimg.cc/VNRdNWpT/Ashton-Bailey.png" />
              <h1 class="text-muted">Ashton Bailey</h1>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://i.postimg.cc/fR7bHvzL/Zoe-Palmer.jpg" />
              <h1 class="text-muted">Zoe Palmer</h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-6">
            <div class="card">
              <img src="https://i.postimg.cc/SRwKPTYX/Maverick-Holm.jpg" />
              <h1 class="text-muted">Maverick Holms</h1>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <img src="https://i.postimg.cc/FKmYmBW3/Akira-Ikuta.jpg" />
              <h1 class="text-muted">Akira Ikuta</h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-6">
            <div class="card">
              <img src="https://i.postimg.cc/J4k0XLSj/Cyrus-Kabiru.jpg" />
              <h1 class="text-muted">Cyrus Kabiru</h1>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <img src="https://i.postimg.cc/brGJ3crc/Edith-Brown.jpg" />
              <h1 class="text-muted">Edith Brown</h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-6">
            <div class="card">
              <img src="https://i.postimg.cc/FHXRg6Q8/Maeve-Powell.jpg" />
              <h1 class="text-muted">Maeve Powell</h1>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <img src="https://i.postimg.cc/zB2vCXJF/Luka-Sincalir.jpg" />
              <h1 class="text-muted">Luka Sin Clair</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
<script></script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@500&family=Finlandica&family=Lato&family=Oswald:wght@300&display=swap");
#intro {
  background-image: url("../assets/about gif.gif");
  background-color: beige;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
}
img {
  width: 450px;
  height: 550px;
  aspect-ratio: 1;
  object-fit: cover;
}
#artists-intro {
  font-size: 4rem;
  font-family: "Cormorant SC", serif;
  background-color: rgb(255, 255, 255);
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
}
.intro:hover {
  color: white;
}
.artist-heading {
  font-size: 2rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
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
  border: 1px solid rgba(255, 255, 255, 0.685);
  z-index: 1;
  max-width: fit-content;
  max-height: fit-content;
  justify-content: center;
}
.container:hover {
  border: 2px solid white;
}
#artists {
  min-height: 100vh;
}
.col-6 {
  /* gap: 30px; */
  padding-bottom: 10px;
  /* justify-content: space-around; */
}
@media screen and (max-width: 1260px) {
  .row {
    display: flex;
    flex-direction: column;
  }
}
.card {
  width: fit-content;
  height: auto;
  box-shadow: 2px black;
}
/* #img {
  padding-bottom: 10px;
  width: 200px;
  height: 200px;
} */
.col {
  display: flex;
  flex-direction: column;
}
@media only screen and (max-width: 600px) {
  #img {
    width: 15rem;
    height: auto;
  }
}
</style>
