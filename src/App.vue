<template>
  <Navbar />
  <router-view />
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
* {
  user-select: none;
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
