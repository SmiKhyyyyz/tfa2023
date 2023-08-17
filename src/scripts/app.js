console.info('Hello world');

var btns = document.querySelectorAll(".btn-open");
var hiddenText = document.querySelectorAll(".bloc-hidden")

for (let i = 0; i < btns.length ; i++) {
  btns[i].addEventListener("click", (e) => {
    hiddenText[i].classList.toggle("bloc-hidden");
  })
}