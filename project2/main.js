function addingSpan() {
  const h1 = document.querySelectorAll(".page2 h1 ");

  h1.forEach((elem) => {
    var clutter = "";
    var text = elem.textContent;
    var splittedText = text.split("");
    splittedText.forEach((e) => {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });
}
addingSpan()

gsap.to(".page2 h1 span", {
  color: "rgb(161 161 170)",
  

  stagger: 0.1,
  scrollTrigger: {

    trigger: ".page2 h1",
    start: "top 80%",
    end: "bottom 20%",
    duration: 1,

    delay: 0.5,
    scrub: 1,
  },
});


  