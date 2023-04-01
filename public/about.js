// let slideIndexS = 0;
// let sliding = false;

const div1 = document.querySelector(".what-why-div-1");
const div2 = document.getElementById("what-why-div-2");
const whatHeader = document.querySelectorAll(".what-why-header");
const aboutHeader = document.querySelectorAll(".about-header");
const whoHeader = document.querySelectorAll(".who-is-header");
const whoIs = document.querySelector(".who-is");

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

const navLinks = document.querySelectorAll(".nav-link");
const activeLink = document.querySelector('a.nav-link[href ="about.html"]');

let slideIndex = 0;
let whatIndex = 0;
new fullpage("#fullpage", {
  //options here

  licenseKey: "gplv3-license",
  autoScrolling: true,
  sectionsColor: ["#1a1a1a"],

  afterLoad: function (origin, destination, direction, trigger) {
    fullpage_api.setScrollingSpeed(400);

    // activeLink.classList.add("active");
    // console.log(activeLink);

    // whoHeader[destination.index].style.opacity = 1;
    // console.log(whoHeader[destination.index].style.opacity);

    const nav = document.querySelector("header.header-hidden");
    if (destination.index !== 0) {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }

    if (destination.index === 3) {
      //   div2.style.visibility = "hidden";

      setTimeout(() => {
        aboutHeader.forEach((header) => {
          header.style.transform = "translateY(0px)";
          header.style.opacity = 1;
        });
      }, 300);

      setTimeout(() => {
        whatHeader.forEach((header) => {
          header.style.transform = "translateY(0px)";
          header.style.opacity = 1;
        });
      }, 1300);
    }

    if (destination.index === 4) {
      rightArrow.addEventListener("click", () => {
        fullpage_api.moveSlideRight();
      });

      leftArrow.addEventListener("click", () => {
        fullpage_api.moveSlideLeft();
      });

      setInterval(function () {
        fullpage_api.moveSlideRight();
      }, 5000);
    }
  },

  beforeLeave: function (origin, destination, direction, trigger) {
    // slideIndex = 0;
    if (origin.index === 1) {
      //   fullpage_api.setScrollingSpeed(2000);
      if (direction === "down") {
        // console.log(
        //   origin.item.children[1].children[0].children[slideIndex].classList
        // );

        // if (
        //   origin.item.children[1].children[0].children[
        //     slideIndex
        //   ].classList.contains("active")
        // ) {
        //   console.log("Gotcha");
        //   origin.item.children[1].children[0].children[
        //     slideIndex
        //   ].style.opacity = 0;
        // }
        slideIndex++;

        // origin.item.children[1].children[0].children.forEach((slide) => {
        //   console.log(1);
        // });

        // const slides = origin.item.children[1].children[0].children;

        // console.log(slides);

        // slides.forEach((slide) => console.log(slide));

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

    if (origin.index === 3) {
      // console.log(whatHeader[0].style.opacity, whatIndex);
      if (whatHeader[0].style.opacity != 1) {
        return false;
      } else if (whatIndex === 0) {
        div2.style.opacity = 1;
        whatIndex++;

        return false;
      }

      //   whatIndex = 0;
      return true;
    }
  },

  afterRender: function () {
    // const navLinks = document.querySelectorAll(".nav-link");
    const hiddenNavLinks = document.querySelectorAll(".nav-hidden-link");

    // const activeLink = document.querySelector('a.nav-link[href ="about.html"]');

    // navLinks[1].classList.add("active");
    hiddenNavLinks[1].classList.add("hidden-active");
    // console.log(activeLink);

    activeLink.classList.add("active");

    const nav = document.querySelector("header.header");
    const heroContainer = document.querySelector(".hero-container");

    const navHeight = nav.getBoundingClientRect().height;
    // console.log(navHeight);

    const obsCallback = function (entries) {
      const [entry] = entries;
      // console.log(entry);
      if (!entry.isIntersecting) nav.classList.add("sticky");
      else nav.classList.remove("sticky");
    };

    const obsOptions = {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    };

    const navObserver = new IntersectionObserver(obsCallback, obsOptions);
    navObserver.observe(heroContainer);

    // console.log(heroContainer);

    // // const heroContainer = document.querySelector(".hero-container");
    // navObserver.observe(heroContainer);

    // Nav toggle
    const navHidden = document.querySelector(".nav-hidden");

    const toggleBar = document.querySelector(".nav-toggle");
    const toggleBar1 = document.querySelector(".toggle-bar-1");
    const toggleBar2 = document.querySelector(".toggle-bar-2");
    const toggleBar3 = document.querySelector(".toggle-bar-3");
    // console.log(toggleBar1);

    let active = false;

    toggleBar.addEventListener("click", () => {
      if (!active) {
        // console.log("Sharp");
        toggleBar2.classList.remove("toggle-active");
        toggleBar2.classList.remove("deactivate");

        toggleBar1.style.transform = "translateX(25px)";
        toggleBar1.style.opacity = "0";

        toggleBar3.style.transform = "translateX(-25px)";
        toggleBar3.style.opacity = "0";

        // toggleBar2.style.transform = "rotateZ(90deg)";
        toggleBar2.classList.add("toggle-active");

        navHidden.classList.add("show");
        // navHidden.style.transform = "translateY(0)";
        nav.style.backgroundColor = "#1a1a1a";

        // navHidden.style.opacity = "1";

        active = true;
      } else {
        toggleBar1.style.transform = "translateX(0)";
        toggleBar1.style.opacity = "1";

        toggleBar3.style.transform = "translateX(0)";
        toggleBar3.style.opacity = "1";

        // toggleBar2.style.animationName = "toggle2";
        // toggleBar2.style.animationDirection = "reverse";
        // toggleBar2.style.animationDuration = "1s";
        toggleBar2.classList.add("deactivate");

        nav.style.backgroundColor = "transparent";
        navHidden.classList.remove("show");
        // navHidden.style.display = "none";
        active = false;
      }
    });
  },
});

const heroText = document.querySelector(".hero-text");

heroText.innerHTML = `
  <h2 class="hero-header">
  About <br /> <span class="green">Mercho</span>
  </h2>
`;

// const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

// const obsCallback = function (entries) {
//   const [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// };

// const obsOptions = {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// };

// const navObserver = new IntersectionObserver(obsCallback, obsOptions);
// navObserver.observe(heroContainer);
