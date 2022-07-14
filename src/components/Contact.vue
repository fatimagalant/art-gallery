<template>
  <section id="contact">
    <h1 class="heading2">Contact Us</h1>
    <div class="row">
      <div class="col-6">
        <form action="https://formspree.io/f/xoqropev" method="POST">
          <input
            name="name"
            type="text"
            class="feedback-input form-control"
            placeholder="NAME"
          />
          <input
            name="email"
            type="text"
            class="feedback-input form-control"
            placeholder="EMAIL"
          />
          <textarea
            name="text"
            class="feedback-input form-control"
            placeholder="COMMENT"
          ></textarea>
          <button class="btn" type="submit" value="SUBMIT">Submit</button>
        </form>
      </div>
      <div class="col-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.2674197088063!2d18.490509915594316!3d-33.98566428062414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bedd50e81%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1657287963522!5m2!1sen!2sza"
          width="550"
          height="450"
          style="border: 0; padding: 2rem"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div class="direct-contact-container">
      <ul class="contact-list">
        <li class="list-item">
          <i class="fa fa-map-marker fa-2x"
            ><span class="contact-text place">Cape Town, South Africa</span></i
          >
        </li>

        <li class="list-item">
          <i class="fa fa-phone fa-2x"
            ><span class="contact-text phone"
              ><a href="tel:+21-666-6969" title="Give us a call"
                >(+21) 666-6969</a
              ></span
            ></i
          >
        </li>

        <li class="list-item">
          <i class="fa fa-envelope fa-2x"
            ><span class="contact-text gmail"
              ><a href="mailto:#" title="Send us an email"
                >leschevres420@gmail.com</a
              ></span
            ></i
          >
        </li>
      </ul>
    </div>
  </section>
  <footer class="bg-black">
    <hr />
    <ul class="social-media-list">
      <li>
        <a href="https://github.com/" target="_blank" class="contact-icon">
          <i class="fa-brands fa-github" aria-hidden="true"></i
        ></a>
      </li>
      <li>
        <a
          href="https://za.pinterest.com/"
          target="_blank"
          class="contact-icon"
        >
          <i class="fa-brands fa-pinterest" aria-hidden="true"></i
        ></a>
      </li>
      <li>
        <a href="https://twitter.com/" target="_blank" class="contact-icon">
          <i class="fa-brands fa-twitter" aria-hidden="true"></i
        ></a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          class="contact-icon"
        >
          <i class="fa-brands fa-instagram" aria-hidden="true"></i
        ></a>
      </li>
    </ul>
    <hr />

    <div class="copyright">&copy; ALL RIGHTS RESERVED</div>
  </footer>
</template>
<script>
// export default {
//   name: "contact Form",
//   components: { contactForm },
// };
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
@import url("https://fonts.googleapis.com/css2?family=Finlandica&family=Lato&family=Oswald:wght@300&display=swap");

.form-control {
  width: 100%;
}
#contact {
  background: rgb(0, 0, 0);
}
.heading {
  color: white;
  font-weight: 500px;
  font-size: 5rem;
  font-family: "Oswald", sans-serif;
}
form {
  max-width: 420px;
  margin: 50px auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.row {
  display: flex;
}

.col-4 {
  flex: 50%;
}
@media screen and (max-width: 1060px) {
  .row {
    display: flex;
    flex-direction: column;
  }
}
.container {
  /* background-color: #ececec71;*/
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: fit-content;
  margin: 5rem;
  padding: 2rem;
}

iframe {
  filter: invert();
}
.feedback-input {
  color: rgb(0, 0, 0);
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-size: 16px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border: 1px solid #ffffff;
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;
}

.feedback-input:focus {
  border: 1px solid #3d3d3d;
}

textarea {
  height: 150px;
  line-height: 150%;
  resize: vertical;
}

[type="submit"] {
  font-family: "Oswald", sans-serif;
  width: 50%;
  background: #ffffff;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  color: rgb(0, 0, 0);
  font-size: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.3s;
  margin-top: -4px;
  font-weight: 500;
}
[type="submit"]:hover {
  background: rgb(168, 168, 168);
  color: white;
}

/* Location, Phone, Email Section */
.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
}

.list-item {
  line-height: 4;
  color: rgb(255, 255, 255);
}

.contact-text {
  font: 300 18px "Lato", sans-serif;
  letter-spacing: 1.9px;
  color: rgb(255, 255, 255);
}

.place {
  margin-left: 62px;
}

.phone {
  margin-left: 56px;
}

.gmail {
  margin-left: 53px;
}

.contact-text a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  color: rgb(97, 97, 97);
  text-decoration: none;
}

/* Social Media Icons */
.social-media-list {
  position: relative;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.social-media-list li a {
  color: #fff;
}

.social-media-list li {
  position: relative;
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 10px 3px;
  line-height: 60px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(27, 27, 27);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.social-media-list li:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px #fff;
  transition: all 0.2s ease-in-out;
}

.social-media-list li:hover {
  background-color: rgb(196, 196, 196);
}

.social-media-list li:hover:after {
  opacity: 1;
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37, 0.74, 0.15, 1.65);
}

.social-media-list li:hover a {
  color: #000;
}

.copyright {
  font: 200 14px "Oswald", sans-serif;
  color: rgb(56, 56, 56);
  letter-spacing: 1px;
  text-align: center;
}

hr {
  border-color: rgba(255, 255, 255, 0.6);
}

iframe {
  padding-bottom: 5px;
  width: auto;
}
/*
@media screen and (max-width: 607px) {
  iframe {
    width: 400px;
    height: 400px;
  }
}
@media screen and (max-width: 607px) {
  #contact {
    display: flex;
    /* flex-direction: column !important; */
/* justify-content: center !important;
    padding-right: 2 rem;
  }
} */
/* @media screen and (max-width: 1178px) {
  #contact {
    display: flex;
    flex-direction: column !important; */
/* padding-bottom: 2 rem !important; */
/* }
} */
/* @media screen and (max-width: 607px) {
  #container {
    display: flex; */
/* flex-direction: column !important; */
/* justify-content: center !important;
    padding-right: 2 rem !important; */
/* }
}  */
</style>
