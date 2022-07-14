<template>
<section id="market">

<div class="container" id="box-container">
      <div class="box">
        <img src="../assets/market/painting-2.jpg" alt="" class="art-image">
        <div id="text">
          <h3 class="pt-1 text-white" id="title">The Great Wave</h3>
          <p class="lead text-muted" id="address"></p>
          <p id="category">Katsushika Hokusai</p>
          <p id="description" class="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias impedit fugiat aliquam natus asperiores sequi quis maiores quo quos eius, quae tempora eaque illo porro?</p>
          <a href="" id="art-link">More info <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
      </div>

      <div class="box">
        <img src="../assets/market/painting-1.jpg" alt="" class="art-image">
        <div id="text">
          <h3 class="pt-1 text-white" id="title">Starry Night</h3>
          <p class="lead text-muted" id="address"></p>
          <p id="category">Vincent van Gogh</p>
          <p id="description" class="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias impedit fugiat aliquam natus asperiores sequi quis maiores quo quos eius, quae tempora eaque illo porro?</p>
          <a href="" id="art-link">More info <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
      </div>
      <div class="box">
        <img src="../assets/market/painting-4.jpg" alt="" class="art-image">
        <div id="text">
          <h3 class="pt-1 text-white" id="title">Girl With the Pearl Earring</h3>
          <p class="lead text-muted" id="address"></p>
          <p id="category">Johannes Vermeer</p>
          <p id="description" class="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias impedit fugiat aliquam natus asperiores sequi.</p>
          <a href="" id="art-link">More info <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
      </div>
       <div class="box">
        <img src="../assets/market/painting-5.jpg" alt="" class="art-image">
        <div id="text">
          <h3 class="pt-1 text-white" id="title">Flaming June</h3>
          <p class="lead text-muted" id="address"></p>
          <p id="category">Frederic Leighton</p>
          <p id="description" class="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias impedit fugiat aliquam natus asperiores sequi quis maiores quo quos eius, quae tempora eaque illo porro?</p>
          <a href="" id="art-link">More info <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
      </div>
    </div>
</section>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getAllArt");
  },
  computed: {
    pieces() {
      return this.$store.state.pieces;
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
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
#market{
         background: rgb(35, 37, 38);
    height: fit-content;
    width: 100%;
}
#box-container {
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  /* flex-basis: 33.333333%; */
  
}

.box {
  height: max-content;
  width: fit-content;
  background: transparent;
  flex-basis: 50%;
   border-radius: 4px 4px;
   transition:all 0.7s ease-in-out;
   display: flex;
   flex-direction: row;
   margin: 0 auto;
   padding-top: 30px;
}

.box:hover{
  transform: translateY(-5px);
}

.art-image {
  height: 300px;
  width: 400px;
  filter: brightness(100%);
  transition: all 1s ease-in-out;
  border-radius: 5px 0px 0px 5px;
  border: 1px solid white;
}



#title {
  margin-top: 2%;
  font-family: 'Lora', serif;
  font-size: xx-large;
  margin: 0 auto;
  font-weight: 600;
}
#address {
  padding-top: 2px;
  font-family: "Roboto", sans-serif;
  margin: 0 auto;
  font-size: 14px;
}

#category {
  color: rgb(224, 224, 224);
  font-family: 'Poppins', sans-serif; 
  font-size: 13px;
  font-weight: 300;
}

#description {
  color: rgb(240, 240, 240);
  font-family: 'Poppins', sans-serif; 
  font-size: 13px;
  font-weight: 300;
  width: 250px;
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

#text {
  padding-left: 3%;
  margin-left: 10px;
  width: 400px;
  border: 1px solid white;
  border-radius: 0px 5px 5px 0px;
}

#art-link{
    color: black;
      font-family: 'Poppins', sans-serif; 
      text-decoration: none;
      border-bottom: 1px solid black;
      background-color: white;
      padding: 3px 10px;
}
</style>
