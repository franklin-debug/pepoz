const quest1 = document.querySelector(".hh11");
const answer1 = document.querySelector(".hh22");
const sty = document.querySelector(".faqbody2");

quest1.addEventListener("click", () => {
  answer1.classList.toggle("active");
  sty.classList.toggle("active");
});

const quest = document.querySelector(".hh1");
const answer = document.querySelector(".hh2");
const sty2 = document.querySelector(".faqbody1");

quest.addEventListener("click", () => {
  answer.classList.toggle("active");
  sty2.classList.toggle("active");
});

const quest2 = document.querySelector(".hh111");
const answer2 = document.querySelector(".hh222");
const sty3 = document.querySelector(".faqbody3");

quest2.addEventListener("click", () => {
  answer2.classList.toggle("active");
  sty3.classList.toggle("active");
});
