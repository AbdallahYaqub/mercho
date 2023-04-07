const heroText = document.querySelector(".hero-text");
const navLinks = document.querySelectorAll(".nav-link");
const hiddenNavLinks = document.querySelectorAll(".nav-hidden-link");

// console.log(navLinks[0]);

navLinks[1].classList.add("active");
hiddenNavLinks[1].classList.add("active");

heroText.innerHTML = `
  <h2 class="hero-header">
  About <br /> <span class="green">Mercho</span>
  </h2>
`;

// Horizontal scroll
let controller = new ScrollMagic.Controller();

let scrollHorizontal = new TimelineLite();
scrollHorizontal.to("#js-wrapper", 1, { x: "-66.6%" });

let horizontalScroll = new ScrollMagic.Scene({
  triggerElement: "#js-wrapper",
  triggerHook: "onLeave",
  duration: 1000,
})
  .setPin("#js-wrapper")
  .setTween(scrollHorizontal)
  .addTo(controller);

//   Show  Headers
new ScrollMagic.Scene({
  triggerElement: "#what-why",
  triggerHook: 0.1, // show, when scrolled 10% into view
  //   duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
})
  .setClassToggle("#what-why-div-1", "visible")
  .addTo(controller);

// //   Hide header
new ScrollMagic.Scene({
  triggerElement: "#approach", // y value not modified, so we can use element as trigger as well
  triggerHook: 0.8,
})
  .addTo(controller)
  .on("enter", function (e) {
    document.getElementById("what-why-div-1").classList.add("remove");
  })
  .on("leave", function (e) {
    document.getElementById("what-why-div-1").classList.remove("remove");
  });
//   .addIndicators();

var aboutHeaders = document.getElementsByClassName("about-header");
for (let i = 0; i < aboutHeaders.length; i++) {
  //   Show About headers
  // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: "#what-why", // y value not modified, so we can use element as trigger as well
    triggerHook: 0.3,
  })
    .setClassToggle(aboutHeaders[i], "sticky") // add class toggle(requires plugin)
    .addTo(controller);

  //   Hide About headers
  new ScrollMagic.Scene({
    triggerElement: "#approach", // y value not modified, so we can use element as trigger as well
    triggerHook: 0.9,
  })
    .addTo(controller)
    .on("enter", function (e) {
      aboutHeaders[i].classList.remove("sticky");
      //   document.getElementById("what-why-div-1").classList.add("remove");
    })
    .on("leave", function (e) {
      aboutHeaders[i].classList.add("sticky");
      //   document.getElementById("what-why-div-1").classList.remove("remove");
    });
  // .addIndicators();
}

var whatWhyP = document.querySelectorAll(".what-why-div-2 p");
for (let i = 0; i < whatWhyP.length; i++) {
  // Show About texts
  // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: "#what-why-div-2", // y value not modified, so we can use element as trigger as well
    triggerHook: 0.9,
  })
    .setClassToggle(whatWhyP[i], "visible") // add class toggle(requires plugin)
    .addTo(controller);
}

// Slide Arrows
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

const slideCount = slide.length;
console.log(slideCount);

let i = 1;
let skip;
rightArrow.addEventListener("click", () => {
  if (i < slideCount) {
    skip = -100 * i;
    slides.style.transform = `translateX(${skip}vw)`;
    console.log(i);
    i++;
  } else {
    i = 1;
    slides.style.transform = `translateX(0)`;
  }
});

leftArrow.addEventListener("click", () => {
  if (i === 1) {
    slides.style.transform = `translateX(-200vw)`;
    console.log(i);
    i = 3;
  } else if (i <= slideCount) {
    skip = -100 * Math.abs(i - slideCount + 1);
    slides.style.transform = `translateX(${skip}vw)`;
    console.log(i);
    i--;
  }
});

// Philosophy
const philosophyHeader = document.querySelector(".philosophy-header");
new ScrollMagic.Scene({
  triggerElement: ".philosophy-div",
  triggerHook: 0,
})
  .addTo(controller)
  .on("enter", function (e) {
    philosophyHeader.classList.add("sticky");
  })
  .on("leave", function (e) {
    philosophyHeader.classList.remove("sticky");
  });
//   .addIndicators();

new ScrollMagic.Scene({
  triggerElement: ".footer",
  triggerHook: 1,
})
  .addTo(controller)
  .on("enter", function (e) {
    philosophyHeader.style.transform = "translateY(-100vh)";
  })
  .on("leave", function (e) {
    philosophyHeader.style.transform = "translateY(0)";
  });
//   .addIndicators();
