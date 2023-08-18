import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.to("#rencontres", {
  x: 0,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
      trigger: "#rencontres",
  },
});
gsap.to("#problemes", {
  x: 0,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
      trigger: "#problemes",
  },
});
gsap.to("#hypothese", {
  x: 0,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
      trigger: "#hypothese",
  },
});
gsap.to("#solution", {
  x: 0,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
      trigger: "#solution",
  },
});
gsap.to("#recherches", {
  x: 0,
  opacity: 1,
  scrollTrigger: {
      trigger: "#recherches",
  },
});
gsap.to("#presentation", {
  x: 0,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
      trigger: "#presentation",
  },
});


var btns = document.querySelectorAll(".btn-open");
var hiddenText = document.querySelectorAll(".bloc-hidden")

for (let i = 0; i < btns.length ; i++) {
  btns[i].addEventListener("click", (e) => {
    hiddenText[i].classList.toggle("bloc-hidden");
  })
}


var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;


function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}