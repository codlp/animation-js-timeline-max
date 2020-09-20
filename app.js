const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");

const timeline = new TimelineMax();

// .fromTo parameters:
// 1. the object
// 2. the duration
// 3. the starting position of the animation
// 4. the ending position of the animation

timeline.fromTo(
  hero,
  1,
  { height: "0%" },
  { height: "80%", ease: Power2.easeInOut }
)

.fromTo(
  hero,
  1.2,
  { width: "100%" },
  { width: "80%", ease: Power1.easeInOut }
)

.fromTo(
  slider,
  1.2,
  // Move it off screen and then move it back
  { x: "-100%"},
  { x: "0%", ease: Power1.easeInOut },
  // Minus the number of seconds it should start sooner
  // here it should start 1.2sec sooner
  // so it will start at the same time as the previous animation
  "-=1.2"
)

// To slide the logo a bit and play a bit on its opacity
.fromTo(
  logo,
  0.5,
  { opacity: 0, x: 30},
  { opacity: 1, x: 0},
  "-=0.5"
)

.fromTo(
  hamburger,
  0.5,
  { opacity: 0, x: 30},
  { opacity: 1, x: 0},
  "-=0.5"
)

.fromTo(
  headline,
  0.5,
  { opacity: 0, x: 30},
  { opacity: 1, x: 0},
  "-=0.5"
)
