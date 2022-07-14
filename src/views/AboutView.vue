<template>
  <div class="about">
<section id="blog">
    <h1 id="blog-heading">ABOUT</h1>
<img src="../assets/about/artsy.jpg" alt="" id="image-artsy">
<div id="text-container">
      <h1 id="text-header">Les Chévres is a multidisciplinary a digital art gallery</h1>
      <p id="text-body">
        Located in Cape Town's Arts District. It was founded in 2022 by Fatima Galant, Ricardo Ronan Moses, Joshua Steed and Uzair Damonse. It features art exhibitions and the development of  diverse projects in the fields of art and culture. The visit to art galleries in Cape Town was a starting point and a major inspiration for developing the early concepts of Les Chévres.
 The  rich history of Cape art and the way ancient art forms  have always served as a powerful transformative tool for humankind have deeply influenced the founders throughout the creative process.
.As a result, a continuous artistic portrayal of the relationship between humans and nature, from observing the full integration of humanity into its primitive culture and environment, to modern efforts to understand its relationship today. Les Chévres concept relates to  land and nature, our deeper souls, and all the inherited transformative powers we have inherited from our most primitive ancestors. It is  ancient wisdom linked to the present and the future through modern artistic expression. The galleries represent artists whose deep connection to nature is their main source of inspiration. By using natural materials and inspiring debate on this subject, they are helping to rethink this important but endangered connection to the Earth.
 These artists are particularly focused on their process. It is often challenging and sometimes goes against traditional practices and techniques. As a result, the boundaries between media and  established boundaries of art, craft, and design are often blurred.

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
    top:100px;
    width: 40%;
    margin-left: 20%;color: white;}
#text-header{
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    font-size: 35px;
    margin: 0px auto;
padding: 0;
}
#text-body{
width: 69%;
text-align: justify;
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