
gsap.from(".nav", {
  y: -50,
  duration: 0.5,
  delay: 0.2,
  stagger: 0.3,
  opacity: 0,
});

gsap.from(".nav li", {
  y: -50,
  duration: 0.5,
  delay: 0.2,
  stagger: 0.4,
});

gsap.from(".hero .h1", {
  x: -1300,
  duration: 1,
  delay: 1,

  opacity: 0,

 stagger: 0.3,

});

gsap.from(".page1 .circle", {
  scale: 0,
  rotate: 720,
  duration: 4,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".page1 .circle",
    start: "top 90%",
    end: "bottom 50%",

    scrub: 1,
  },
});

gsap.from(".page2 .circle", {
  scale: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".page2 .circle",
    start: "top 90%",
    end: "bottom 50%",

    scrub: 1,
  },
});

gsap.from(".page3 .circle", {
  scale: 0,
  rotate: 720,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".page3 .circle",
    start: "top 90%",
    end: "bottom 50%",

    scrub: 1,
  },
});

gsap.to(".pineffect img", {
  width: "100%",

  scrollTrigger: {
    trigger: ".pineffect",
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
gsap.from(".texteffect h1", {
  transform : "translateX(-125%)",
  duration: 1,
  delay: 0.2,
  scrollTrigger:{
    trigger: ".texteffect",
    scrub: 2,
    pin:true,
  }
})
// Shery.mouseFollower();

var intitalPath = `M 10 100 Q 500 100 1000 100 `
var finalPath = `M 10 100 Q 500 100 1000 100 `

var path = document.querySelector('.string')
path.addEventListener("mouseenter" , (dets)=>{
     const newpath = `M 10 100 Q ${dets} 100 1000 100`
     

})