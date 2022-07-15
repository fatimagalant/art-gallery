<template>
  <div class="about">
<section id="blog">
    <h1 id="blog-heading">ABOUT</h1>
<img src="../assets/about/artsy.jpg" alt="" id="image-artsy">
<div id="text-container">
      <h1 id="text-header">Les Chévres is a multidisciplinary digital art gallery</h1>
      <p id="text-body">
        Located in Cape Town's Arts District. It was founded in 2022 by Fatima Galant, Ricardo Ronan Moses, Joshua Steed and Uzair Damonse. It features art exhibitions and the development of  diverse projects in the fields of art and culture. The visit to art galleries in Cape Town was a starting point and a major inspiration for developing the early concepts of Les Chévres.
    </p>
    <a href="" id="blog-link">Read more <i class="bi bi-arrow-right"></i></a>
      </div>

      
    </section>
  </div>
</template>

<style scoped>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

#blog{
    background-color: #222222;
    height: 100vh;
    width: 100%;
}
#blog-heading{
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    color: white;
    font-size: 150px;
    filter: opacity(0.1);
    margin-left: 3%;
    position: absolute;
}
#image-artsy{
    width: auto;
    height: 600px;
float: right;
margin-right: 28%;
margin-top: 5%;
filter: brightness(0.7);
}

#text-container{    position: absolute;
    top:12rem;
    width: 38rem;
    margin-left: 20%;color: white;
    }

#text-header{
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    font-size: 2.5rem;
    margin: 0px auto;
padding: 0;
}
#text-body{
width: 20rem;
text-align: justify;
padding-bottom: 3rem;
}

#blog-link{
    text-decoration: none;
    color: inherit;
    padding:8px 15px;
    background-color: #474747;
}


/* blog cards */
#blog-cards{
    background-color: #222222;
    height: 100vh;
    width: 100%;
}
.card-flex-container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.card-container{
    width: fit-content;
    height: 600px;
border-radius: 0px;
background: #222222;
box-shadow:  19px 19px 39px #1e1e1e,
             -19px -19px 39px #262626;
}
#card-img{
    width: auto;
    height: 250px;
    
}

</style>