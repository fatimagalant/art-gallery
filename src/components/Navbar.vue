<template>
  <button id="menu-btn" type="button" @click="toggleNav()">menu</button>
  <nav class="nav-links">
    <router-link class="items" @click="toggleNav()" to="/home">
      <img
        id="goat-img"
        v-bind:src="'https://i.postimg.cc/J4xCfTgD/tinywow-remove-bg-3337581.png'"
    /></router-link>

    <router-link class="items" @click="toggleNav()" to="/home"
      >Home</router-link
    >
    <router-link class="items" @click="toggleNav()" to="/about"
      >About</router-link
    >
    <router-link class="items" @click="toggleNav()" to="/featured"
      >Featured</router-link
    >
    <router-link class="items" @click="toggleNav()" to="/artists"
      >Artists</router-link
    >
    <router-link class="items" @click="toggleNav()" to="/gallery"
      >Gallery</router-link
    >
    <router-link class="items" @click="toggleNav()" to="/contact"
      >Contact</router-link
    >
    <router-link class="items" @click="toggleNav()" to="/login"
      >Login</router-link
    >
    <router-link class="items" @click="toggleNav()" to="/register"
      >Register</router-link
    >

    <button
      id="close-btn"
      class="text-light"
      type="button"
      @click="toggleNav()"
    >
      close
    </button>
  </nav>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleNav() {
      document.querySelector(".nav-links").classList.toggle("active");
    },
  },
};
</script>
<style scoped>
#close-btn {
  margin-left: 110rem;
  margin-top: 3rem;
  font-size: 2rem;
  position: absolute;
  border: none;
  background: transparent;
  color: whitesmoke;
  transform-origin: 0 0;
  transform: rotate(90deg);
}
#menu-btn {
  color: grey;
  z-index: 90;
  font-size: 2rem;
  position: fixed;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  transform-origin: 0 0;
  transform: rotate(90deg);
}
#goat-img {
  width: 8rem;
  height: auto;
  transition: all ease-in-out 0.5s;
}
#goat-img:hover {
  filter: invert();
}
.items {
  padding: 0.5rem;
  font-size: 3rem;
  list-style-type: none;
  --bs-text-opacity: 1;
  color: grey;
  transition: all ease-in-out 0.5s;
  text-decoration: none;
}
.items:hover {
  color: whitesmoke;
}
@font-face {
  font-family: fancy;
  src: url(../assets/Cinzel-VariableFont_wght.ttf);
}
.nav-links {
  z-index: 100;
  font-family: fancy;
  position: fixed;
  top: -100%;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  transition: top 0.3s linear;
}
.nav-links.active {
  top: 0;
}
@media only screen and (max-width: 600px) {
  #close-btn {
    margin-left: 21rem;
    margin-top: 2rem;
     font-size: 1rem;
  }
  #menu-btn {
    position: fixed;
    right: -2rem;
    font-size: 1rem;
  }
  .items {
    font-size: 2rem;
  }
}
</style>
