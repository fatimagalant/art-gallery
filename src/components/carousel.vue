<template>
  <div id="carrousel">
    <div ref="container" class="keen-slider">
      <div class="keen-slider__slide number-slide1">
        <div class="frame">
          <div class="matte"></div>
          <div class="img-wrapper">
            <img
              id="c-img"
              src="https://i.postimg.cc/PJcGRfTQ/don-t-let-go-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="keen-slider__slide number-slide2">
        <div class="frame">
          <div class="matte"></div>
          <div class="img-wrapper">
            <img
              id="c-img"
              src="https://i.postimg.cc/Gh5Sw3VZ/bleeding-rainbow.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="keen-slider__slide number-slide3">
        <div class="frame">
          <div class="matte"></div>
          <div class="img-wrapper">
            <img
              id="c-img"
              src="https://i.postimg.cc/pTyJB4JK/yellowing-surroundings.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="keen-slider__slide number-slide4">
        <div class="frame">
          <div class="matte"></div>
          <div class="img-wrapper">
            <img
              id="c-img"
              src="https://i.postimg.cc/g0RHtQwh/David-s-Rose.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="keen-slider__slide number-slide5">
        <div class="frame">
          <div class="matte"></div>
          <div class="img-wrapper">
            <img
              id="c-img"
              src="https://i.postimg.cc/KYrmNc5g/nicole-pollok-b-YX2-Bz-Nw-EUk-unsplash.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="keen-slider__slide number-slide6">
        <div class="frame">
          <div class="matte"></div>
          <div class="img-wrapper">
            <img
              id="c-img"
              src="https://i.postimg.cc/zvMNByq4/mind-and-heart.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="all-img">
    <div class="cont-img">
      <img
        id="c-img"
        src="https://i.postimg.cc/PJcGRfTQ/don-t-let-go-1.jpg"
        alt=""
      />
    </div>
    <div class="cont-img">
      <img
        id="c-img"
        src="https://i.postimg.cc/Gh5Sw3VZ/bleeding-rainbow.jpg"
        alt=""
      />
    </div>
    <div class="cont-img">
      <img
        id="c-img"
        src="https://i.postimg.cc/pTyJB4JK/yellowing-surroundings.jpg"
        alt=""
      />
    </div>
    <div class="cont-img">
      <img
        id="c-img"
        src="https://i.postimg.cc/g0RHtQwh/David-s-Rose.jpg"
        alt=""
      />
    </div>
    <div class="cont-img">
      <img
        id="c-img"
        src="https://i.postimg.cc/KYrmNc5g/nicole-pollok-b-YX2-Bz-Nw-EUk-unsplash.jpg"
        alt=""
      />
    </div>
    <div class="cont-img">
      <img
        id="c-img"
        src="https://i.postimg.cc/zvMNByq4/mind-and-heart.jpg"
        alt=""
      />
    </div>
  </div>
</template>
<script>
import { useKeenSlider } from "keen-slider/vue.es";
import "keen-slider/keen-slider.min.css";
export default {
  setup() {
    const [container] = useKeenSlider(
      {
        loop: true,
        mode: "free",
        slides: { origin: "center", perView: 2.5, spacing: 10 },
        range: {
          min: -5,
          max: 5,
        },
      },
      [
        (slider) => {
          let timeout;
          let mouseOver = false;
          function clearNextTimeout() {
            clearTimeout(timeout);
          }
          function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
              slider.next();
            }, 1500);
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true;
              clearNextTimeout();
            });
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false;
              nextTimeout();
            });
            nextTimeout();
          });
          slider.on("dragStarted", clearNextTimeout);
          slider.on("animationEnded", nextTimeout);
          slider.on("updated", nextTimeout);
        },
      ]
    );
    return { container };
  },
};
</script>
<style scoped>
.all-img {
  display: none;
}
#c-img {
  height: 30rem;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
main {
  padding-top: 60px;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
#carousel {
  background: rgb(35, 37, 38) !important;
}
.frame {
  position: relative;
  width: 600px;
  margin: 0 auto;
  border: 26px #e0e0e0 solid;
  background-color: #f5f5f5;
  box-shadow: inset -10px 0px 8px rgba(163, 155, 139, 0.66),
    inset 3px 0px 8px rgba(163, 155, 139, 0.12),
    inset 0px -8px 1px rgba(218, 216, 214, 0.4),
    /* -28px -6px 60px rgba(163, 155, 139, 0.46), */
      /* -16px -4px 16px
      rgba(163, 155, 139, 0.46), */ 0px -4px 1px rgba(163, 155, 139, 0.14);
  border-radius: 1px;
}
.img-wrapper {
  margin: 54px;
}
.frame img {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
}
.matte {
  position: absolute;
  border: transparent solid 54px;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.18);
  z-index: 2;
}
body {
  margin: 0;
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
[class^="number-slide"],
[class*=" number-slide"] {
  /* background: transparent; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 80vh;
  max-height: 100vh;
}
@media only screen and (max-width: 1285px) {
  #carrousel {
    display: none;
  }
  .all-img {
    display: contents;
  }
}
</style>
