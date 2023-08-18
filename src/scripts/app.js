console.info('Hello world');
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

var btns = document.querySelectorAll(".btn-open");
var hiddenText = document.querySelectorAll(".bloc-hidden")

for (let i = 0; i < btns.length ; i++) {
  btns[i].addEventListener("click", (e) => {
    hiddenText[i].classList.toggle("bloc-hidden");
  })
}

gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  x: 500,
  rotation: 360,
  scrollTrigger: ".box",
});
