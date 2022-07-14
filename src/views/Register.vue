<template>
  <div class="background">
    <section
      id="register"
      class="d-flex justify-content-center align-items-center col"
    >
      <div id="left-page">
        <h1 v-if="user" id="register-heading">
          New user created and logged in<span class="text-primary">.</span>
        </h1>
        <h1 v-else id="register-heading">
          Create a new account<span class="text-primary">.</span>
        </h1>
        <p id="register-subheading">
          Already a Member? <a href="login">Log In</a>
        </p>
      </div>
      <div id="form-container">
        <form id="form-panel" @submit.prevent="register">
          <p id="slogan" class="pb-3">JOIN THE GALLERY</p>
          <div class="name-type">
            <label for="fullNameField">
              Full Name <br />
              <input type="text" name="fullNameField" v-model="fullName" />
            </label>

            <select
              name="userTypeSelector"
              id="userTypeSelector"
              v-model="role"
            >
              <option value="" disabled selected>User Type</option>
              <option value="" name="client">Client</option>
              <option value="" name="artist">Artist</option>
              <option value="" name="admin">Admin</option>
            </select>
          </div>
          <div class="email-pass">
            <label id="emailField-lbl" for="emailField">
              Email <br />
              <input
                type="email"
                name="emailField"
                id="emailInput"
                v-model="email"
              />
            </label>

            <label for="passwordField">
              Password <br />
              <input type="password" name="passwordField" v-model="password" />
            </label>
          </div>
          <button class="my-4" id="btn-register" type="submit">Register</button>
        </form>
        <div v-if="user" id="welcome">Welcome {{ user.fullName }}</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      fullName: "",
      role: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
        fullName: this.fullName,
        role: this.role,
        email: this.email,
        password: this.password,
      });
    },
  },
};
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
.background {
  background: rgb(35, 37, 38);
  width: 100%;
  height: 88.6vh;
}
#register {
  background: rgb(35, 37, 38);
  background: linear-gradient(
      42deg,
      rgba(35, 37, 38, 1) 0%,
      rgba(35, 37, 38, 1) 34%,
      rgba(35, 37, 38, 0.7122199221485469) 74%,
      rgba(35, 37, 38, 0.33406866164434523) 100%
    ),
    url("../assets/register/bobross-canvas.jpg");
  background-size: cover;
  width: 940px;
  height: 620px;
  border-radius: 20px 20px;
  margin: 0 auto;
}
#slogan {
  font-family: "Poppins", sans-serif;
  color: rgb(206, 206, 206);
}
#register-heading {
  font-size: 50px;
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  width: 400px;
}
#register-subheading {
  font-size: 16px;
  color: rgb(221, 221, 221);
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  margin-top: 20px;
  margin-bottom: 3%;
  margin-left: 20px;
}
#form-panel {
  width: 500px;
  height: fit-content;
  padding: 50px 50px 0px 50px;
}
label {
  background-color: rgb(44, 45, 46);
  border-radius: 10px;
  padding: 10px;
  color: rgb(200, 200, 200);
  font-size: 10px;
  font-family: "Poppins", sans-serif;
  width: 300px;
}
input {
  background-color: rgb(44, 45, 46);
  border: none;
  color: rgb(200, 200, 200);
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
select,
select::after,
select:focus {
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: rgb(44, 45, 46);
  color: rgb(200, 200, 200);
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  padding: 0px 8px;
}
.name-type {
  display: flex;
  flex-direction: row;
  column-gap: 13px;
  margin-bottom: 13px;
}
.email-pass {
  display: flex;
  flex-direction: column;
  row-gap: 13px;
}
#btn-register {
  padding: 15px 25px;
  border-radius: 25px 25px;
  outline: none;
  border: none;
  font-family: "Poppins", sans-serif;
  background-color: rgb(2, 106, 211);
  transition: all 0.5s ease-in-out;
}
#btn-register:hover {
  border: 2px solid rgb(2, 106, 211) inset;
  background-color: rgba(2, 106, 211, 0);
  color: white;
  box-shadow: 10px 13px 81px -11px rgba(2, 106, 211, 0.57);
  -webkit-box-shadow: 10px 13px 81px -11px rgba(2, 106, 211, 0.57);
  -moz-box-shadow: 10px 13px 81px -11px rgba(2, 106, 211, 0.57);
}
#emailField-lbl {
  width: 400px;
}
#left-page {
  display: flex;
  flex-direction: column;
}
</style>
