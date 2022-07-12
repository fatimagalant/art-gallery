<template>
  <section id="login">
    <div class="main-panel">
      <div id="login-panel">
        <div id="login-margin">
          <h1 id="login-header">Login</h1>
          <p id="login-subheader" class="py-2">our vast collection awaits...</p>
          <form action="" id="form-container">
            <label for="emailField">
              Email <br />
              <input type="email" name="emailField" id="emailInput" />
            </label>

            <label for="passwordField">
              Password <br />
              <input type="password" name="passwordField" />
            </label>
            <button id="btn-login">Login</button>
            <p id="create-txt">
              Don't have an account? <a href="register.html">Create one now</a>
            </p>
          </form>
        </div>
      </div>
      <div class="parent">
        <img
          src="../assets/login/gold-frame.png"
          alt="right-img"
          id="art-frame"
          class="image1"
        />
        <img
          src="../assets/login/pearlgirlpainting.png"
          alt=""
          class="image2"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
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

#login {
  /* background: rgb(35, 37, 38); */
background: rgb(35, 37, 38);
  background-size: cover;
  width: 100%;
  height: 100vh;
  padding-top: 100px;
}

.parent {
  position: relative;
  top: 0;
  left: 0;
  animation-name: floating;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transition: box-shadow 1s;
  width: fit-content;
  height: fit-content;
}
.image1 {
  position: relative;
  top: 0;
  left: 0;
}

.image2 {
  position: absolute;
  top: 0px;
  left: 0px;
  transition: transform 0.2s; /* Animation */
}

.image2:hover {
}

.parent:hover {
  animation: none;

  box-shadow: 10px 11px 19px -8px rgba(209, 153, 44, 0.48);
  -webkit-box-shadow: 10px 11px 19px -8px rgba(209, 153, 44, 0.48);
  -moz-box-shadow: 10px 11px 19px -8px rgba(209, 153, 44, 0.48);
}

/* @keyframes floating {
  0% {
    transform: translate(0, 0px);
  }
  33.33334% {
    transform: translate(0, 3px);
  }
66.66667% {
    transform: translate(0, -3px);
}
100% {
    transform: translate(0, -0px);
}

} */
.main-panel {
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 13px;
}

#login-panel {
  color: black;
  background-color: rgb(235, 232, 232);
  width: 470px;
  height: 620px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.336);
}

#login-margin {
  margin: 50px 0px 50px 50px;
}

#login-header {
  font-family: "Poppins", sans-serif;
  font-size: 45px;
  color: black;
  font-weight: 600;
}
#login-subheader {
  font-family: "Poppins", sans-serif;
  color: rgba(0, 0, 0, 0.397);
}

label {
  background-color: rgb(228, 228, 228);
  border-radius: 10px;
  padding: 4px;
  color: rgb(12, 12, 12);
  font-size: 10px;
  font-family: "Poppins", sans-serif;
  width: 300px;
  border: 1px solid rgba(0, 0, 0, 0.336);
}
input {
  background-color: rgb(228, 228, 228);
  border: none;
  color: rgb(12, 12, 12);
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  width: 280px;
}

input::after,
input:active,
input:focus {
  border: none;
  outline: none;
  font-size: 18px;
}

#form-container {
  display: flex;
  flex-direction: column;
  row-gap: 13px;
}

#btn-login {
  width: fit-content;
  padding: 15px 25px;
  border-radius: 25px 25px;
  outline: none;
  border: none;
  font-family: "Poppins", sans-serif;
  color: white;
  background-color: rgb(0, 0, 0);
  transition: all 0.5s ease-in-out;
  margin-top: 4px;
}

#create-txt {
  font-family: "Poppins", sans-serif;
  font-size: 13px;
}

a,
a:hover {
  text-decoration: none;
  color: black;
  font-weight: 600;
  border-bottom: 1px dashed black;
}
</style>
