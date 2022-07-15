<template>
  <i
    title="Edit"
    class="bi bi-pencil-square"
    id="edit"
    @click="toggleModal"
  ></i>
  <div v-if="active" class="mod">
    <form @submit.prevent="updatePieces(piece.id)">
      <div>ARTIST NAME</div>
      <input type="text" v-model="piece.artistName" />
      <div>ART NAME</div>
      <input type="text" v-model="piece.artName" />
      <div>TITLE</div>
      <input type="text" v-model="piece.imgURL" />
      <div>PRICE</div>
      <input type="text" v-model="piece.price" />
      <div>CATEGORY</div>
      <select type="text" v-model="piece.category">
        <option value="Abstract">Abstract</option>
        <option value="Painting">Painting</option>
        <option value="Sculpture">Sculpture</option>
        <option value="Drawing">Drawing</option>
        <option value="Widlife">Widlife</option>
      </select>
      <div>DESCRIPTION</div>
      <input type="text" v-model="piece.description" />
      <br />
      <button type="submit">Save</button>
      <button type="button" @click="toggleModal">Close</button>
    </form>
  </div>
</template>
<script>
export default {
  props: ["piece"],
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleModal() {
      this.active = !this.active;
    },
    updatePieces() {
      this.$store.dispatch("updateProduct", this.piece);
    },
  },
};
</script>
<style scoped>
.mod {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 30px;
  border: 5px solid black;
  z-index: 100;
}
#edit {
  font-size: 20px;
  font-weight: 900;
  color: cornflowerblue;
}
</style>
