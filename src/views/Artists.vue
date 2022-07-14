<template>
  <Artists />
  <div class="card-display">
    <PropertyCard
      v-for="property in properties"
      :key="property.id"
      :property="property"
    />
    <!-- <router-link :to="{ name: 'PropertyDetails', params: { id: property.id } }"> -->
    <h1>{{ property.title }}</h1>
    <!-- </router-link> -->
  </div>
</template>
<script>
import PropertyCard from "../components/PropertyCard.vue";
export default {
  components: { PropertyCard },
  data() {
    return {
      properties: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/properties")
      .then((res) => res.json())
      .then((data) => (this.properties = data))
      .catch((err) => console.log(err.message));
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
