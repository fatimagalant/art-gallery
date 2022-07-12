<template>
  <nav>
    <p
      id="offcanvas-btn"
      class="btn"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasTop"
      aria-controls="offcanvasTop"
    >
      menu
    </p>
    <div
      class="offcanvas offcanvas-top bg-black"
      tabindex="-1"
      id="offcanvasTop"
      aria-labelledby="offcanvasTopLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasTopLabel">
          <img id="goat-img" src="../assets/tinywow_remove_bg_3337581.png" />
        </h5>
        <button
          id="close-btn"
          type="button"
          class="btn"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          close
        </button>
      </div>
      <div class="offcanvas-body bg-black">
        <ul id="list">
          <li id="items">
            <router-link v-b-toggle href="#/home" @click.prevent
              >Home</router-link
            >
            <!-- <router-link to="/home" data-bs-dismiss="offcanvas"
              >Home</router-link
            > -->
          </li>
          <li id="items">
            <router-link to="/featured" data-bs-dismiss="offcanvas"
              >Featured</router-link
            >
          </li>
          <li id="items">
            <router-link to="/about" data-bs-dismiss="offcanvas"
              >About</router-link
            >
          </li>
          <li id="items">
            <router-link to="/artists" data-bs-dismiss="offcanvas"
              >Artists</router-link
            >
          </li>
          <li id="items">
            <router-link to="/gallery" data-bs-dismiss="offcanvas"
              >Gallery</router-link
            >
          </li>
          <li id="items">
            <router-link to="/contact" data-bs-dismiss="offcanvas"
              >Contact</router-link
            >
          </li>
          <router-view></router-view>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  watch: {
    $route(to, from) {
      this.show = false;
    },
  },
};
</script>
<style>
.offcanvas-body {
  overflow-y: hidden;
}
.offcanvas.offcanvas-top {
  top: 0;
  right: 0;
  left: 0;
  height: var(--bs-offcanvas-height);
  min-height: 100vh;
  border-bottom: var(--bs-offcanvas-border-width) solid
    var(--bs-offcanvas-border-color);
  transform: translateY(-100%);
}
#offcanvas-btn {
  font-size: 1.2rem;
  position: fixed;
  top: 10px;
  right: 10px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  z-index: 100;
}
#close-btn {
  font-size: 1.2rem;
  position: fixed;
  top: 48px;
  right: 27px;
  writing-mode: vertical-rl !important ;
  text-orientation: mixed;
}
#close-btn:hover {
  color: whitesmoke;
}
.btn {
  border: none !important;
}
@font-face {
  font-family: fancy;
  src: url(../assets/Cinzel-VariableFont_wght.ttf);
}
#list {
  font-family: fancy;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: flex-start;
}
a {
  color: grey;
  text-decoration: none !important;
}
a:hover {
  color: white;
}
#items {
  padding-top: 1rem;
  font-size: 3rem;
  list-style-type: none;
  --bs-text-opacity: 1;
  color: grey;
  transition: all ease-in-out 0.5s;
}
#items:hover {
  color: whitesmoke;
}
#goat-img {
  width: 8rem;
  height: auto;
  transition: all ease-in-out 0.5s;
}
#goat-img:hover {
  filter: invert();
}
@media only screen and (max-width: 600px) {
  #items {
    padding-top: 1rem;
    font-size: 2rem;
    list-style-type: none;
    --bs-text-opacity: 1;
    color: grey;
    transition: all ease-in-out 0.5s;
  }
}
</style>
