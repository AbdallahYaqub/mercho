// Nav toggle
const navHidden = document.querySelector(".nav-hidden");
const nav = document.querySelector(".header");

const toggleBar = document.querySelector(".nav-toggle");
const toggleBar1 = document.querySelector(".toggle-bar-1");
const toggleBar2 = document.querySelector(".toggle-bar-2");
const toggleBar3 = document.querySelector(".toggle-bar-3");
// console.log(toggleBar);

let active = false;

toggleBar.addEventListener("click", () => {
  if (!active) {
    console.log("Sharp");
    toggleBar2.classList.remove("toggle-active");
    toggleBar2.classList.remove("deactivate");

    toggleBar1.style.transform = "translateX(25px)";
    toggleBar1.style.opacity = "0";
    console.log(toggleBar1);

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

// Hero Text
// const heroText = document.querySelector(".hero-text");
// const heroTextInsert = (index = false, text = "", green = "") => {
//   if (!index) {
//     heroText.innerHTML = `
//       <h2 class="hero-header">
//       ${text} <br /> <span class="green">${green}</span>
//       </h2>

//       `;
//   } else {
//     heroText.innerHTML = `
//           <h2 class="hero-header hero-header-1">
//           Unlock <span class="green">the power</span></h2>

//           <h4 class = 'hero-header hero-header-2'>of a strong brand</h4>

//       `;
//   }
//   console.log(index);
// };

// NAV Observer
const heroContainer = document.querySelector(".hero-container");
const navItems = document.querySelector(".nav-items");
const navImg = document.querySelector(".nav-img");
const innerNav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");

const navHeight = nav.getBoundingClientRect().height;
// console.log(heroContainer);

const obsCallback = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
    innerNav.classList.add("flex-end");
    navItems.style.display = "none";
    navImg.style.display = "none";
    navToggle.style.display = "flex";
    // nav.style.backgroundColor = "#1a1a1a";
  } else {
    nav.classList.remove("sticky");
    innerNav.classList.remove("flex-end");
    navItems.style.display = "flex";
    navImg.style.display = "block";
    navToggle.style.display = "none";
    nav.style.backgroundColor = "transparent";
  }
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const navObserver = new IntersectionObserver(obsCallback, obsOptions);
navObserver.observe(heroContainer);
