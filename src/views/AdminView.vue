<template>
  <section id="admin-tools">
    <nav
      class="navbar navbar-expand-lg navbar-light sticky-top p-3"
      id="top-nav"
    >
      <div class="container-md">
        <a class="navbar-brand fs-6" href="admin">Gallery</a>
        <ul class="nav justify-content-end">
          <li class="nav-item dropdown">
            <a
              class="nav-link text-secondary"
              href="#"
              id="navbarDarkDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div class="d-flex align-items-center">
                <img id="profile-pic" src="../assets/admin/user.png" alt="" />
                <span class="mx-1 username">Full Name</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="d-flex justify-content-center pt-5">
      <div id="panel" class="pb-5 mb-5">
        <nav
          class="navbar navbar-expand-lg navbar-light px-5 py-3"
          id="bottom-nav"
        >
          <div class="container-fluid">
            <a class="navbar-brand text-white" href="#"
              >Artworks
              <span class="badge rounded-pill bg-danger" id="badge-count">{{
                filteredPieces?.length
              }}</span>
              <br />
              <p class="lead text-white" id="pnl-sub">
                keep track of your sales/listings
              </p></a
            >
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <form class="d-flex align-items-center">
                <p class="text-white">Search by category</p>
                <select
                  v-model="categoryFilter"
                  name="categoryFilter"
                  id="categoryFilter"
                  value="All"
                  class="mx-1 rounded h-100"
                >
                  <option value="All">All</option>
                  <option value="Abstract">Abstract</option>
                  <option value="Painting">Painting</option>
                  <option value="Sculpture">Sculpture</option>
                  <option value="Drawing">Drawing</option>
                  <option value="Widlife">Widlife</option>
                </select>
                <input
                  class="search-input ps-2 rounded"
                  type="text"
                  placeholder="Search by title"
                  aria-label="Search"
                  v-model="search"
                />

                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  id="btn-add"
                >
                  <i class="bi bi-plus"></i> Add
                </button>

                <!-- Add Modal -->
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content p-2">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Create A New Piece
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <form
                          @submit.prevent="createPieces"
                          id="modal-form"
                          class="p-2"
                        >
                          <input
                            type="text"
                            id="title-add"
                            placeholder="Artist Name"
                            v-model="artistName"
                          />
                          <input
                            type="text"
                            id="address-add"
                            placeholder="Art Name"
                            v-model="artName"
                          />
                          <input
                            type="url"
                            placeholder="https://picsum.photos/300/400"
                            id="imageURL-add"
                            v-model="imgURL"
                          />
                          <div>
                            <input
                              type="number"
                              id="price-add"
                              placeholder="Price"
                              v-model="price"
                            />
                          </div>

                          <select
                            v-model="category"
                            class="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            id="category-select-add"
                          >
                            <option
                              value=""
                              disabled
                              selected
                              hidden
                              class="text-muted"
                            >
                              Category
                            </option>
                            <option value="Abstract">Abstract</option>
                            <option value="Painting">Painting</option>
                            <option value="Sculpture">Sculpture</option>
                            <option value="Drawing">Drawing</option>
                            <option value="Widlife">Widlife</option>
                          </select>
                          <textarea
                            name="description"
                            id="description"
                            cols="57"
                            rows="10"
                            placeholder="Description of your art"
                            v-model="description"
                          ></textarea>
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button type="submit" class="btn btn-primary">
                            Create Piece
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </nav>

        <div class="container py-2" id="title-container">
          <div class="row">
            <div class="col-1 ms-1">ID</div>
            <div class="col-1">PREVIEW</div>
            <div class="col-2">TITLE / ARTIST NAME</div>
            <div class="col-4">DESCRIPTION</div>
            <div class="col-1">CATEGORY</div>
            <div class="col-1">PRICE</div>
            <div class="col-1"></div>
            <div class="col-1"></div>
          </div>
        </div>
        <ul
          class="container mx-1"
          id="property-container"
          v-if="filteredPieces"
        >
          <li class="items" v-for="piece in filteredPieces" :key="piece.id">
            <div class="row item">
              <span class="col-1">{{ piece.id }}</span>
              <span class="col-1"
                ><img v-bind:src="piece.imgURL" id="imageURL"
              /></span>
              <span class="col-2 title"
                >{{ piece.artName }}
                <div class="icons">
                  <div>
                    <span id="bedrooms">
                      {{ piece.artistName }}
                    </span>
                  </div>
                </div></span
              >

              <span class="col-4">{{ piece.description }}</span>

              <span class="col-1">{{ piece.category }}</span>
              <span class="col-1">{{ piece.price }}</span>
              <span class="col-1"></span>
              <span class="col-1" id="CRUD-icons"
                ><UpdateModal :piece="piece" />
                <i
                  title="Delete"
                  class="bi bi-x-circle"
                  id="delete"
                  @click="deletePiece(piece.id)"
                ></i
              ></span>
            </div>
          </li>
        </ul>
        <div v-else>
          <h1>Loading...</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UpdateModal from "../components/UpdateModal.vue";
export default {
  components: { UpdateModal },
  computed: {
    filteredPieces() {
      return this.$store.state.pieces?.filter((piece) => {
        let isMatch = true;
        if (!piece.artName?.toLowerCase().includes(this.search.toLowerCase())) {
          isMatch = false;
        }
        if (
          this.categoryFilter !== "All" &&
          piece.category !== this.categoryFilter
        ) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
  data() {
    return {
      artistName: "",
      artName: "",
      price: "",
      imgURL: "",
      description: "",
      category: "",
      search: "",
      categoryFilter: "All",
    };
  },
  methods: {
    createPieces() {
      this.$store.dispatch("createPieces", {
        artistName: this.artistName,
        artName: this.artName,
        price: this.price,
        imgURL: this.imgURL,
        description: this.description,
        category: this.category,
      });
    },
    deletePiece(id) {
      this.$store.dispatch("deletePiece", id);
    },
  },

  mounted() {
    return this.$store.dispatch("getAllArt");
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Roboto:wght@100;300;400;500;700;900&display=swap");

/* CSS Reset */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  font-family: "Roboto", sans-serif;
}
ol,
ul {
  list-style: none !important;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
html {
  width: 100% !important;
}

section {
  width: 100% !important;
}
body {
  width: 100% !important;
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}
/* 
font-family: 'Open Sans', sans-serif;
font-family: 'Roboto', sans-serif; 
*/
body {
  font-family: "Roboto", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Open Sans", sans-serif;
}

.navbar-brand {
  font-family: "Open Sans", sans-serif;
}
#top-nav {
  border-bottom: 1px solid rgba(210, 209, 209, 0.137);
  background: rgb(35, 37, 38);
  color: white;
}
#bottom-nav {
  background-color: rgb(35, 37, 38);
  border-radius: 10px 10px;
}

#admin-tools {
  background: rgb(35, 37, 38);

  width: 100%;
  min-height: 88.7vh;
  height: fit-content;
}

#profile-pic {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.473);
}
.username {
  color: rgb(255, 255, 255) !important;
}
#panel {
  background-color: rgb(37, 39, 40);
  width: 80%;
  height: fit-content;
  border-radius: 8px 8px;
  box-shadow: 0px 20px 40px 0px rgba(221, 220, 220, 0.259) !important;
}

.badge {
  width: 30px !important;
  height: auto !important;
  font-size: 12px !important;
  background: rgb(2, 106, 211) !important;
}

#pnl-sub {
  font-size: 15px !important;
}

.search-input {
  width: 200px;
  height: 40px;
  margin: 0 auto;
  padding: 0;
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.162);
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  outline: none;
}

.search-input:active {
  outline: none;
}

.btn-search {
  width: fit-content;
  height: 40px;
  color: white !important;
  background: rgb(2, 106, 211) !important;
  font-weight: bolder;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border: none;
  padding: 0px 13px 0px 13px;
}

input[type="search"]::placeholder {
  padding: 10px !important;
}

#btn-add {
  height: 40px;
  color: white;
  background: rgb(2, 106, 211);
  text-align: center;
  margin-left: 15px;
  border: none;
}
#btn-add:focus {
  outline: none;
  border: none;
}
#btn-add:active {
  box-shadow: 0 0 30px #000000;
  outline: none;
}

#live-link {
  color: #1db954;
}

#title-container {
  border-top: 0.5px solid rgba(0, 0, 0, 0.238);
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.238);
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  background-color: rgb(42, 45, 46);
  color: white;
}

.items {
  margin: 0 auto;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.29);
  color: #a3aca8;
}
.item {
  display: flex;
  justify-tracks: center;
  font-family: "Roboto", sans-serif;
}

#delete {
  font-size: 20px;
  font-weight: 900;
  color: red;
}

#CRUD-icons {
  letter-spacing: 10px;
}

#CRUD-icons:hover {
  cursor: pointer;
}

#imageURL {
  width: 6rem;
  height: 6rem;
  border-radius: 3px 3px;
  border: 1px solid #bac1be;
}
.title {
  font-weight: 700;
  color: #5f6165;
  font-family: "Roboto", sans-serif;
}

.icons {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  font-weight: 300;
  font-size: 13px;
  padding-top: 10px;
  padding-bottom: 3px;
}

#modal-form {
  padding: 20px;
}

.modal-dialog {
  margin: auto;
  padding: 10px;
}

#title-add {
  width: 100%;
  padding: 0px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  border-radius: 4px 4px;
}

#title-add:focus {
  border: 3px solid #555;
}
#categoryFilter {
  height: 2rem;
}
#address-add {
  width: 100%;
  padding: 0px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  border-radius: 4px 4px;
}
#address-add:focus {
  border: 3px solid #555;
}

#category-select-add {
  width: 50%;
  padding: 3px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

#category-select-add:focus {
  border: 3px solid #555;
}

#size-add {
  width: 40%;
  padding: 0px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  border-radius: 4px 4px;
}

#size-add:focus {
  border: 3px solid #555;
}

#price-add {
  width: 40%;
  padding: 0px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  border-radius: 4px 4px;
}

#price-add:focus {
  border: 3px solid #555;
}

#bed-add {
  width: 20%;
  padding: 0px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  border-radius: 4px 4px;
}

#bath-add {
  width: 20%;
  padding: 0px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  border-radius: 4px 4px;
}

#garage-add {
  width: 20%;
  padding: 0px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  border-radius: 4px 4px;
}

#garage-add:focus {
  border: 3px solid #555;
}
#bath-add:focus {
  border: 3px solid #555;
}
#bed-add:focus {
  border: 3px solid #555;
}

#imageURL-add {
  width: 100%;
  padding: 0px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  border-radius: 4px 4px;
}
#imageURL-add:focus {
  border: 3px solid #555;
}

label {
  color: black;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 600;
}

li {
  list-style: none !important;
}
</style>
