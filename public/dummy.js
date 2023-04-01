// let slideIndexS = 0;
// let sliding = false;

const div1 = document.getElementById("what-why-div-1");
const div2 = document.getElementById("what-why-div-2");

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

// rightArrow.addEventListener("click", () => {
//   fullpage_api.moveSlideRight();
// });

let slideIndex = 0;
let whatIndex = 0;
new fullpage("#fullpage", {
  //options here

  licenseKey: "gplv3-license",
  autoScrolling: true,
  scrollHorizontally: true,
  sectionsColor: ["#1a1a1a"],

  afterSlideLoad: function (section, origin, destination, direction, trigger) {
    console.log("Hello");
  },

  afterLoad: function (origin, destination, direction, trigger) {
    fullpage_api.setScrollingSpeed(400);
    if (destination.index === 4) {
      console.log(destination);
      //   div2.style.visibility = "hidden";

      setTimeout(() => {
        div1.style.opacity = 1;
      }, 1000);
    }

    if (destination.index === 5) {
      console.log("yEAH");
      console.log(rightArrow);
      rightArrow.addEventListener("click", () => {
        fullpage_api.moveSlideRight();
        console.log(rightArrow);
      });
      leftArrow.addEventListener("click", () => {
        fullpage_api.moveSlideLeft();
        console.log(rightArrow);
      });
    }
  },

  beforeLeave: function (origin, destination, direction, trigger) {
    // slideIndex = 0;
    if (origin.index === 2) {
      //   fullpage_api.setScrollingSpeed(2000);
      if (direction === "down") {
        console.log(slideIndex);
        slideIndex++;
        if (slideIndex >= 3) {
          slideIndex = 3;
          return true;
        } else {
          fullpage_api.moveSlideRight();
          return false;
        }
      }

      if (direction === "up") {
        slideIndex--;
        if (slideIndex <= 0) {
          slideIndex = 0;
          return true;
        } else {
          fullpage_api.moveSlideLeft();
          return false;
        }
      }
    }

    if (origin.index === 4) {
      if (whatIndex === 0) {
        setTimeout(() => {
          div2.style.opacity = 1;
          whatIndex++;
        }, 1000);
        return false;
      }

      //   whatIndex = 0;
      return true;
    }
    // if (origin.index === 2) {
    //   //   if (destination.index > origin.index) {
    //   //   } else {
    //   //     slideIndex === 2;
    //   //   }
    //   console.log(slideIndex);
    //   if (slideIndex < 3) {
    //     if (direction === "down") {
    //       console.log("down");
    //       slideIndex++;
    //       if (slideIndex === 3) {
    //         return;
    //       }
    //       fullpage_api.moveSlideRight();
    //     } else {
    //       console.log("up");
    //       slideIndex--;
    //       if (slideIndex === 0) {
    //         return;
    //       }
    //       fullpage_api.moveSlideLeft();
    //     }
    //   }
    //   //   if (direction === "down") {
    //   //     console.log("down");
    //   //     fullpage_api.moveSlideRight();
    //   //   } else {
    //   //     console.log("up");
    //   //   }
    //   console.log(origin.index);

    //   return slideIndex === 3 || slideIndex === -1;
    // }
  },
});

const heroText = document.querySelector(".hero-text");

heroText.innerHTML = `
  <h2 class="hero-header">
  About <br /> <span class="green">Mercho</span>
  </h2>
`;

// Observers

// const floatingHeader = document.querySelector(".floating-header");
// const floatingHeaderHeight = floatingHeader.getBoundingClientRect().height;

// const aboutContainer = document.querySelector(".about-container");
// const aboutContainerHeight = aboutContainer.getBoundingClientRect().height;

// const aboutSVG = document.querySelector(".about-svg");
// const aboutSVGHeight = aboutSVG.getBoundingClientRect().height;

// const viewport = window.innerHeight;

// const scrollContainer = function (entries) {
//   const [entry] = entries;
//   //   entries.forEach((entry) => console.log(entry));
//   //   console.log(entry);
//   if (entry.isIntersecting) {
//     console.log(entry);
//     // floatingHeader.style.position = "fixed";
//   }
// };

// const ratio = Math.round((viewport / aboutSVGHeight) * 100) / 100;

// console.log(ratio);

// const aboutContainerObserver = new IntersectionObserver(scrollContainer, {
//   root: null,
//   threshold: ratio,
// });
// aboutContainerObserver.observe(aboutContainer);
