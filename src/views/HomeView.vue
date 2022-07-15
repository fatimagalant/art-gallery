<template>
  <section class="home">
    <div class="parent">
<h1 class="image2" id="heading"><span id="head-before">We are,</span><br>
Les Chèvres
</h1>
<img src="../assets/home/goathead1.png" alt="" id="goat" class="image1">

</div>

  </section>

   <section id="categories">
        <div class="d-flex justify-content-center align-items-center">
    <div class="panel-container">
        
        <div class="panel" id="info">
            <h1>Browse by Category</h1>
            <p class="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>
        </div>
        
        <div class="panel" id="abstract">
            <p>4 Items</p>
           <h3>Abstract</h3>
        </div>
        <div class="panel" id="painting">
            <p>11 Items</p>
            <h3>Paintings</h3>
        </div>
        <div class="panel" id="sculpture">
            <p>6 Items</p>
            <h3>Sculptures</h3>
        </div>
        <div class="panel" id="wildlife">
            <p>9 Items</p>
            <h3>Wildlife</h3>
        </div>

    </div></div>
    </section>
  <footer class="">
<img href="/home" src="../assets/home/logo.png" alt="logo" id="logo">
<a href="/contact">contact</a>
<a href="/about">about</a>
<a href="/gallery">gallery</a>
<a>© 2022 Les Chevres</a>
  </footer>
  
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
};
</script>

<style scoped>
.parent {
  position: relative;
  top: 0;
  left: 0;
  width: fit-content;
  height: fit-content;
}
.image1 {
  position: absolute;
  top: 0px;
  left: 0px;
}

.image2 {
  position: relative;
  top: 0;
  left: 0;
  font-size: 11rem;
  color: white;
  font-weight: 700;
  font-family: 'Libre Baskerville', serif;
}
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,700;1,400&family=Lora:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
/* font-family: 'Poppins', sans-serif; */
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
#head-before{
  font-weight: 400;
  font-style: italic;
}
#categories {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgb(35, 37, 38);
  font-family: 'Poppins', sans-serif;
}
  

.panel-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  column-gap: 35px;
  height: 500px;
}
.panel {
  width: 250px;
  height: 500px;
  border-radius: 5px 5px;
  backdrop-filter: brightness(80%);
  transition: all 1s ease-in-out;
  cursor: pointer;
  color: white;
box-shadow: 0px 1px 10px 3px rgba(204,204,204,0.46);
-webkit-box-shadow: 0px 1px 10px 3px rgba(204,204,204,0.46);
-moz-box-shadow: 0px 1px 10px 3px rgba(204,204,204,0.46);
border: 1px solid white;
}
.panel:hover {
  border-radius: 5px 5px;
  filter: brightness(110%);
}

#info {
  padding-top: 15%;
  cursor: default;
  color: rgb(255, 255, 255);
  background-color: rgb(35, 37, 38);
  filter: brightness(100%);
  box-shadow: none;
  border: none;
}
#info h1 {
  font-size: 26px;
}
#info:hover{
  filter: brightness(100%);
}
#abstract {
  background-image: url(../assets/categories/abstract-panel.jpg);
  background-size: cover;
}
#abstract:hover{
    width: 350px;
  background-image: url(../assets/categories/abstract-panel.jpg);
}

#painting {
  background-image: url(../assets/categories/painting-panel.jpg);
  background-size: cover;
}
#painting:hover{
    width: 350px;
    background-image: url(../assets/categories/painting-panel.jpg)
}

#sculpture {
  background-image: url(../assets/categories/sculpture-panel.jpg);
  background-size: cover;
  color: black;
}
#sculpture:hover{
    width: 350px;
    background-image: url(../assets/categories/sculpture-panel.jpg);
    filter: brightness(100%);
}

#wildlife {
  background-image: url(../assets/categories/wildlife-panel.jpg);
  background-size: cover;
}
#wildlife:hover{
    width: 350px;
     background-image: url(../assets/categories/wildlife-panel.jpg);
    background-size: cover;
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
/* font-family: 'Poppins', sans-serif; */
.home{
width:100%;
height: 100vh;
background-image: linear-gradient(0deg, rgb(35, 37, 38) 0%, #485563 100%);
background-size: cover;
}
footer{
  color:white;
  font-weight: lighter;
  background: rgb(39, 40, 41);
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4rem;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
}

#logo{
  height: 2.4rem;
  width:auto;
  filter: brightness(20);
}

a{
  text-decoration: none;
  color:inherit;}
#goat{
float: right;
width: 600px;
height: auto;

}
</style>
