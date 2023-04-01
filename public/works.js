const heroText = document.querySelector(".hero-text");
const navLinks = document.querySelectorAll(".nav-link");
const hiddenNavLinks = document.querySelectorAll(".nav-hidden-link");

// console.log(navLinks[0]);

navLinks[0].classList.add("active");
// hiddenNavLinks[0].classList.add("hidden-active");

heroText.innerHTML = `
  <h2 class="hero-header">
  Mercho's <br /> <span class="green">Work</span>
  </h2>
`;
