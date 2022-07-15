<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/gallery">Gallery</router-link> |
    <router-link to="/artworkdetails">Artwork Details</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/admin">Admin</router-link> |
  </nav>
  <router-view />
</template>

<style>
::-webkit-scrollbar {
  display: none;
}
#app {
}

nav {
  padding: 30px;
  background: rgb(35, 37, 38);
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
