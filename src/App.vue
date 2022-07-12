<!-- <NavBar />    
  <router-view>  -->
<!-- </template> -->
<!-- <script>
 import NavBar from "../components/NavBar.vue";
 export default {
// components: { NavBar },
 };
 </script> -->
<!-- <style>
 #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
 }
  nav {
   padding: 30px;
 }
 nav a {
   font-weight: bold;
   color: #2C3E50;
 }
 nav a.router-link-exact-active {
   color: aqua;
 } 
 </style> -->
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/featured">Featured</router-link> |
    <router-link to="/gallery">Gallery</router-link> |
    <router-link to="/artists">Artists</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c3b299;
  text-decoration-line: none !important;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}
nav a :hover {
  color: #c3b299;
}
nav a.router-link-exact-active {
  color: #c3b299;
}
nav {
  background-color: rgb(0, 0, 0);
  color: white;
}
</style>
