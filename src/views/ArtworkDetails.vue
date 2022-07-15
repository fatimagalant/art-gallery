<template>
  <section id="item-view">
    <div id="item-wrapper">
      <div id="item-container" v-if="piece">
        <div id="info-div">
          <p class="text-white artist-name">{{ piece.artistName }}</p>
          <p id="image-description" class="text-white">
            " {{ piece.description }} "
          </p>
        </div>
        <div class="d-flex flex-column align-items-start artist-name">
          <img id="artwork" v-bind:src="piece.imgURL" alt="" />
          <p class="my-1 mt-3 text-white">{{ piece.artName }}</p>
          <p class="my-1 text-white">R {{ piece.price }}</p>
          <p class="my-1 text-white">{{ piece.category }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  // name: "artworkDetails",
  props: ["id"],
  computed: {
    piece() {
      return this.$store.state.piece;
    },
  },
  mounted() {
    this.$store.dispatch("getSinglePiece", this.id);
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
/* 
font-family: 'Lora', serif;
font-family: 'Poppins', sans-serif; 
*/
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
}
ol,
ul {
  list-style: none;
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
#item-view {
  background: rgb(35, 37, 38);
  width: 100%;
  height: 100vh;
}
#item-wrapper {
  padding-top: 50px;
  /* height: 500px;
  width: 100%;
  background: rgb(35, 37, 38);  */
}
#item-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  background: rgb(39, 41, 42);
}

#artwork {
  width: 500px;
  height: auto;
  padding-left: 13px;
  border: 1px solid rgba(255, 255, 255, 0.068);
}

#image-description {
  font-size: 45px;
  font-family: "Lora", serif;
  margin-top: 52px;
  min-height: 510px;
  line-height: 155%;
}

#info-div {
  height: 650px;
  width: 500px;
  padding-right: 13px;
}
.artist-name {
  font-family: "Poppins", sans-serif;
}

#collection-link {
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  color: white;
  border-bottom: 1px solid white;
}
</style>
